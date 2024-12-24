/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import PlantHeadingSection from "./PlantHeadingSection";
import BenefitBox from "./BenefitBox";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import { getRandomIdx } from "shared-components/Utils";

const PlantInfoSection = (props) => {


  const { plant } = props;
  const [ imageIdx, setImageIdx] = useState(getRandomIdx(plant.images))

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col flex-1 ">
          <div className="block md:hidden mb-4">
            <PlantHeadingSection plant={plant} />
          </div>

          <img className="rounded-lg" src={plant.images[imageIdx].src} />
          <div className="mt-4 text-center flex flex-1">
            <BenefitBox
              icon="far fa-check-circle"
              title="Guaranteed Healthy"
              description="Guaranteed to arrive healthy or your money back"
            />
            <div className="bg-slate-300 w-px"></div>
            <BenefitBox
              icon="far fa-truck-fast"
              title="Free Shipping"
              description="Get free ground shipping on orders of $50 or more."
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 px-8">
          <div className="hidden md:block">
            <PlantHeadingSection plant={plant} />
          </div>
          <div className="text-slate-600 leading-relaxed mb-10">
            {plant.description}
          </div>
          <PlantPurchaseOptions plant={plant} imageIdx={imageIdx} setImageIdx={setImageIdx}/>
        </div>
      </div>
    </>
  );
};

export default PlantInfoSection;
