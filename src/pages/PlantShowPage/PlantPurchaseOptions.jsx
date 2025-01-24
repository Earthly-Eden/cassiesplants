/* eslint-disable react/prop-types */
import { useState } from "react";
import clsx from "clsx";
import { POT_COLORS } from "shared-components/Utils";
import * as cartService from "services/cart";


const PlantPurchaseOptions = (props) => {

  const { plant, imageIdx, setImageIdx } = props;
  const [quantity, setQauntity] = useState(1);
  const [ isLoading, setIsLoading ] = useState(false)

  return (
    <>
      <div className="text-lg flex items-center text-emerald-700 mb-2">
        <i className="mr-1 fa-solid fa-brush"></i>
        <div>Pot Color</div>
      </div>

      <div className="flex">
        {plant.images.map((image, idx) => (
          <div key={image.pot_color}>
            <div
              className={clsx(
                "flex flex-col rounded-full w-8 h-8 mx-[8px] items-center",
                POT_COLORS[image.pot_color],
                imageIdx === idx && "outline outline-slate-500 outline-offset-1"
              )}
              onMouseEnter={() => {
                setImageIdx(idx);
              }}
            ></div>
            <div className="text-slate-500 text-center">{image.pot_color}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex">
        <div className="text-slate-400 mr-4 items-center justify-center w-24 rounded-full flex border border-slate-300">
          <button
            onClick={() => {
              if (quantity > 1) setQauntity(quantity - 1);
            }}
          >
            -
          </button>
          <div className="mx-4 text-emerald-700">{quantity}</div>
          <button onClick={() => setQauntity(quantity + 1)}>+</button>
        </div>
        {/* <div className="items-center justify-center w-64 h-12 rounded-full flex bg-emerald-700 border-4 border-yellow-500"> */}
        <button
          onClick={async () => {
            setIsLoading(true)
            const response = await cartService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIdx].pot_color,
            });
            const data = await response.json()
           
            setIsLoading(false)
           
          }}
          className="bg-emerald-500 hover:bg-emerald-800 rounded-full text-white ml-4 flex-1 p-2"
        >
         {
           isLoading ? <i className="mr-2 text-white text-lg fa-solid fa-spinner animate-spin"></i> : 
         <i className="mr-2 text-white text-lg fa-solid fa-cart-shopping"></i>
         }
          Add to Cart
        </button>
        {/* </div> */}
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
