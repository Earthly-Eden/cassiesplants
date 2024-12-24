/* eslint-disable react/prop-types */
import clsx from "clsx";
const BenefitBox = (props) => {
  const { icon, title, description } = props;

  return (
    <>
      <div className="flex flex-col">
      <i className={clsx(
        "text-2xl text-emerald-700 fa-solid", icon
      )}></i>
        <div className="text-slate-700 my-1">{title}</div>
        <div className="text-slate-500 text-sm">{description}</div>
      </div>
    </>
  )

};

export default BenefitBox;