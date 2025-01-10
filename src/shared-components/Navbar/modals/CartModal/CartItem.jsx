/* eslint-disable react/prop-types */
import * as cartService from "services/cart";

const CartItem = (props) => {
  const { item, fetchCart } = props;


  const plantTotal = item.price_per_unit * item.quantity;

console.log("our item", item);

  return (
    <>
      <div className="flex">
        <img src={item.image_src} className="w-28 rounded-md" />
        <div className="flex justify-between mx-4 text-slate-500 flex-1">
          <div className="">
            <div className="font-playfair text-xl text-emerald-700">
              {item.plant_name}
            </div>
            <div className="text-slate-500 flex my-1">
              <div className="w-14 text-slate-400">color:</div>
              {item.pot_color}
            </div>
            <div className="text-slate-500 flex my-1">
              <div className="w-14 text-slate-400">qty:</div>
              {item.quantity}
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <div className="text-slate-500">${plantTotal}</div>
          <button 
          onClick={ async () => {
            await cartService.removeItemFromCart({itemId: item.id});
            fetchCart();


          }}  
          className="hover:text-red-500 text-slate-400 text-sm">
          <i className="mr-2 fa-solid fa-trash text-base"></i>
            remove
          </button>
          </div>
        </div>
      </div>

      
   
    </>
  );
};

export default CartItem;
