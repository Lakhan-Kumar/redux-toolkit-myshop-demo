import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartSelector=useSelector((state)=>state.cart.items)
    console.log(cartSelector.length);
    
  return (
      <div className="cart">
        <Link to="/cart">
      <div className="cart-icon">🛒</div>
      <span className="cart-count">{cartSelector.length?cartSelector.length:0}</span>
      </Link>
    </div>
  )
}
export default Cart;
