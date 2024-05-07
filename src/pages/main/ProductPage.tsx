import Breadcrumbs from '@/modules/shared/Breadcrumbs/Breadcrumbs';
import { useLocation, useParams } from 'react-router-dom';
import { setCurrentProduct, setErrorCurrentProduct, setLoadingCurrentProduct } from '@/feature/currentProduct';
import { TProductDetails } from '@/modules/shared/ProductItem/products';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { getResponse } from '@/helpers/getCurrentProduct';
import ProductDetails from '@/modules/ProdactPage/components/ProductsDetails/ProductDetails';
import ProductInfo from '@/modules/ProdactPage/components/ProductInfo/ProductInfo';

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const { state } = useLocation();
  const currentProduct = useAppSelector((state) => state.currentProduct.currentProduct);

  const getCurrentProduct = async () => {
    try {
      dispatch(setLoadingCurrentProduct(true));
      dispatch(setErrorCurrentProduct(false));
      const productsFromServer: TProductDetails[] = await getResponse(state);
      const currentProduct = productsFromServer.find((item) => item.id === itemId);
      if (currentProduct) {
        dispatch(setCurrentProduct(currentProduct));
      }
    } catch (error) {
      dispatch(setErrorCurrentProduct(true));
    } finally {
      dispatch(setLoadingCurrentProduct(false));
    }
  };

  useEffect(() => {
    getCurrentProduct();
  }, [itemId, state]);

  return (
    <>
      <Breadcrumbs />
      {currentProduct && (
        <>
          <ProductDetails product={currentProduct} />
          <ProductInfo product={currentProduct} />
        </>
      )}
    </>
  );
};

export default ProductPage;
