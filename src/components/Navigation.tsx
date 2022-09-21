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
    <nav className="container border-b border-white/10 px-6 py-8 xl:py-9">
      <div className="flex items-center justify-between md:justify-start md:gap-11 xl:justify-between">
        <div className="xl:hidden">
          <img src={Hamburger} alt="hamburger icon" />
        </div>
        <div>
          <img src={Logo} alt="audiophile logo" />
        </div>
        <div className="hidden xl:block">
          <ul className="flex gap-9">
            {LINKS.map((link) => (
              <li
                className="text-subTitle uppercase text-white font-bold hover:text-primary-200"
                key={link.id}
              >
                <a href="/">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:ml-auto xl:ml-0">
          <img src={Cart} alt="cart icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
