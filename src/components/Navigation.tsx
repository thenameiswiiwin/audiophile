import Hamburger from '../assets/images/shared/hamburger-icon.svg';
import Logo from '../assets/images/shared/logo.svg';
import Cart from '../assets/images/shared/cart-icon.svg';

const LINKS = [
  { id: '00', name: 'home' },
  { id: '01', name: 'headphones' },
  { id: '02', name: 'speakers' },
  { id: '03', name: 'earphones' },
];

function Navigation() {
  return (
    <nav className="border-b border-white/10 mx-6 2xl:mx-[165px] py-8 2xl:py-9">
      <div className="flex items-center justify-between md:justify-start md:gap-11 2xl:justify-between">
        <button className="2xl:hidden" type="button">
          <img src={Hamburger} alt="hamburger icon" />
        </button>
        <a href="/">
          <img src={Logo} alt="audiophile logo" />
        </a>
        <div className="hidden 2xl:block">
          <ul className="flex gap-9">
            {LINKS.map((link) => (
              <li
                className="text-subTitle hover:text-primary-200 font-bold uppercase text-white"
                key={link.id}
              >
                <a href="/">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <button className="md:ml-auto 2xl:ml-0" type="button">
          <img src={Cart} alt="cart icon" />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
