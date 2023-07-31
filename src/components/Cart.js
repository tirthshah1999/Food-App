import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <>
            <p>Your cart is empty ☹️</p>
            <div className="mt-4">
              <Link
                to="/"
                className="p-2 m-2 rounded-lg text-white bg-[#4681f4] hover:bg-[#1964fb]"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          <>
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <ItemList
              items={cartItems}
              btnText={"Remove -"}
              btnMethod={"Remove"}
            />

            <div className="mt-2">
              <h3 className="font-extrabold">
                Total Price: ₹
                {cartItems
                  .map((item) => item.card.info.price / 100)
                  .reduce((accumulator, currPrice) => {
                    return (accumulator += currPrice);
                  }, 0)}
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
