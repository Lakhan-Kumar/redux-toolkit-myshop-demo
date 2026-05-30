import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  },[])

  const produtSelector = useSelector((state) => state.products.items);
  console.log(produtSelector);

  const cartSelector=useSelector((state)=>state.cart.items)
  console.log(cartSelector.length);

  return (
  <div className="grid">
    {
     produtSelector.length && produtSelector.map((item)=>(
      <div key={item.id} className="card">
        <img src={item.thumbnail} />
        <div className="content">
          <div className="title">{item.title}</div>
          <div className="brand">{item.brand}</div>
          <div className="price">Rs: {item.price}</div>
          <div className="rating">Rating: {item.rating}</div>
          {
            cartSelector.find(CartItem=>CartItem.id===item.id)?
            <button onClick={()=>dispatch(removeItem(item))} className="btn remove-button">Remove from Cart</button>:
            <button onClick={()=>dispatch(addItem(item))} className="btn">Add to Cart</button>
          }

      </div>
      </div>
      
     ))
    }
  </div>
  )
}

export default Product;
