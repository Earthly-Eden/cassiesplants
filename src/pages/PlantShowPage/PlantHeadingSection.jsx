/* eslint-disable react/prop-types */


const PlantHeadingSection = (props) => {
  const { plant } = props;

  return (
    <>
      <div className="flex justify-between text-emerald-700 font-playfair text-3xl">
        <div className="">{plant.name}</div>
        <div>${plant.price}</div>
      </div>
        <div className="pl-px my-2 text-lg text-slate-500 italic ">
          {plant.botanical_name}
      </div>
    </>
  );
};

export default PlantHeadingSection;
