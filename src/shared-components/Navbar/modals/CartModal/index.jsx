/* eslint-disable react/prop-types */

import { useCallback, useContext, useEffect, useState } from "react";
import SessionContext from "contexts/SessionContext";
import { RemoveScroll } from "react-remove-scroll";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";
import CartItem from "./CartItem";

const CartModal = () => {
  const { username } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);


  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    setItems(await response.json());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subTotal = 0;

  for(let item of items) {
    totalQuantity += item.quantity;
  }

  for(let item of items) {
    subTotal += item.quantity * item.price_per_unit;
  }


  return (
        <div className="flex flex-col bg-white w-full max-w-xl h-screen">
          <div className="bg-emerald-700 p-8 w-full text-2xl text-white flex justify-center items-center font-playfair shadow-lg">
            {username}&apos;s Cart
    
          </div>
          {/* <div className="flex-1 flex flex-col"> */}
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="flex-1 overflow-y-scroll">
                  {items.map((item) => (
                    <div
                      className="mx-5 my-8 pb-6 border-b border-slate-200"
                      key={item.id}
                    >
                      <CartItem item={item} fetchCart={fetchCart} />
                    </div>
                  ))}
                </div>
                  <div className="flex flex-col px-4 border-t border-slate-200 pb-4">
                    <div className="flex justify-between py-4 text-slate-400">
                      <div>{totalQuantity} items</div>
                      <div>
                        subtotal
                        <span className="ml-2 text-lg text-slate-500">
                          ${subTotal}
                        </span>
                      </div>
                    </div>
                    <button 
                    onClick={() => {
                      alert("This app isn't a real plant selling site. ;]")
                    }}
                    className="flex items-center justify-center py-3 text-lg text-white rounded-full bg-emerald-700 hover:bg-emerald-900">
                      checkout
                    <i className="ml-2 text-xl mr-2 fa-solid fa-right-to-bracket"></i>
                    </button>
                  </div>
                
              </>
            )}
          {/* </div> */}
        </div>
  );
};

export default CartModal;
