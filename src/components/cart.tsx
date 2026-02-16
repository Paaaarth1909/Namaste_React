import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../utils/appStore";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store: RootState) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
