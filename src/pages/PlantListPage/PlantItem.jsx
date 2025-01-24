/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomIdx, POT_COLORS } from "shared-components/Utils"


const PlantItem = (props) => {
  const { plant } = props;
  const [plantIdx, setPlantIdx] = useState(getRandomIdx(plant.images));

  return (
    <div className=" mx-5 my-8">
      <Link to={`/plants/${plant.id}`}>
        <img className="w-[270px] h-[320px] rounded-md" src={plant.images[plantIdx].src}/>
      </Link>

      <div className="flex justify-between my-3">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg font-playfair text-emerald-600">
          ${plant.price}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-small text-slate-500">
          {plant.images[plantIdx].pot_color}
        </div>
        <div className="flex">
          {plant.images.map((image, idx) => (
            <div
              key={idx}
              className={clsx(
                "rounded-full w-5 h-5 mx-[2px] border border-slate-300",
                POT_COLORS[image.pot_color],
                plantIdx === idx && "outline outline-slate-500 outline-offset-2"
              )}
              onMouseEnter={() => {
                setPlantIdx(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
