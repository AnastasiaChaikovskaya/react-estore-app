import { FOOTER__LINKS } from '../constants';
import FooterMenuItem from './FooterMenuItem';

const MenuFooter = () => {
  return (
    <div className="footer__nav">
      <ul className="footer__nav-list">
        {FOOTER__LINKS.map((item, index) => (
          <FooterMenuItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default MenuFooter;
