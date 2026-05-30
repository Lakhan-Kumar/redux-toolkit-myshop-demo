import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="header">
    <div className="logo">MyShop</div>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
     <Cart/>
    </header>
  );
};
export default Header;
