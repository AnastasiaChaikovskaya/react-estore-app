import Breadcrumbs from '@/modules/shared/Breadcrumbs/Breadcrumbs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { setCurrentProduct, setErrorCurrentProduct, setLoadingCurrentProduct } from '@/feature/currentProduct';
import { TProductDetails } from '@/modules/shared/ProductItem/products';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { FC, useEffect, useState } from 'react';
import { getResponse } from '@/helpers/getCurrentProduct';
import ProductDetails from '@/modules/ProdactPage/components/ProductsDetails/ProductDetails';
import ProductInfo from '@/modules/ProdactPage/components/ProductInfo/ProductInfo';
import ProductSlider from '@/modules/shared/ProductSlider/ProductSlider';
import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';

interface IProductPageProps {
  category: 'phones' | 'tablets' | 'accessories';
}

const ProductPage: FC<IProductPageProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const alsoLike = useAppSelector((state) => state.alsoLike.alsoLike);
  const navigate = useNavigate();

  const currentProduct = useAppSelector((state) => state.currentProduct.currentProduct);

  const productId = itemId || '';

  const getProductById = async () => {
    try {
      dispatch(setLoadingCurrentProduct(true));
      dispatch(setErrorCurrentProduct(false));
      const productFromServer = await getResponse(category, productId);
      if (!productFromServer) {
        throw Error(`Unable to find product with ${productId}`);
      }
      dispatch(setCurrentProduct(productFromServer));
    } catch (error) {
      dispatch(setErrorCurrentProduct(true));
    } finally {
      dispatch(setLoadingCurrentProduct(false));
    }
  };

  useEffect(() => {
    getProductById();
  }, [itemId]);

  return (
    <>
      <div className="navigate-buttons">
        <Breadcrumbs />
        <Button
          variant="link"
          className="navigate-buttons__back"
          iconLeft={<IconComponent name="arrow-left" height={16} width={16} />}
          onClick={() => {
            navigate('../');
          }}
        >
          Back
        </Button>
      </div>
      {currentProduct && (
        <>
          <ProductDetails currentProduct={currentProduct} />
          <ProductInfo product={currentProduct} />
        </>
      )}
      {alsoLike.length !== 0 && <ProductSlider heading="You may also like" products={alsoLike} />}
    </>
  );
};

export default ProductPage;
