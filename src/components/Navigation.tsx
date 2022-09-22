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
    <nav className="border-b border-white/10 px-6 py-8 md:px-0 xl:py-9">
      <div className="flex items-center justify-between md:justify-start md:gap-11 xl:justify-between">
        <button className="xl:hidden" type="button">
          <img src={Hamburger} alt="hamburger icon" />
        </button>
        <a href="/">
          <img src={Logo} alt="audiophile logo" />
        </a>
        <div className="hidden xl:block">
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
        <button className="md:ml-auto xl:ml-0" type="button">
          <img src={Cart} alt="cart icon" />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
