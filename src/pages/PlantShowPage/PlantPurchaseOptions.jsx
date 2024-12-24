/* eslint-disable react/prop-types */
import { useState } from "react";
import clsx from "clsx";
import { POT_COLORS } from "shared-components/Utils";




const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx  } = props;


  return (
    <>
      <div className="text-lg flex items-center text-emerald-700 mb-2">
        <i className="mr-1 fa-solid fa-brush"></i>
        <div>Pot Color</div>
      </div>

      <div className="flex">
        {
          plant.images.map((image, idx) => (
            <div key={image.pot_color}>
          <div
            className={clsx(
              "flex flex-col rounded-full w-8 h-8 mx-[8px] items-center",
              POT_COLORS[image.pot_color],
            imageIdx === idx && "outline outline-slate-500 outline-offset-1"
            )}
              onMouseEnter={() => {
              setImageIdx(idx)
              }}
              ></div>
              <div className="text-slate-500 text-center">{image.pot_color}</div>
            </div>
          
          ))
        }

      </div>
    </>
  );
};

export default PlantPurchaseOptions;
