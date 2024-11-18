/* eslint-disable react/prop-types */
const Field = (props) => {
  const {label, type, onChange, value } = props;

  return (
    <div key={label} className="flex flex-col">
          <label htmlFor={label} className="text-slate-500">
            {label}
          </label>
          <input
            id={label}
            type={type}
            value={value}
            onChange={onChange}
            className="pl-2 border border-slate-100 rounded-md focus:outline-emerald-700"
          />
        </div>
  )

};

export default Field;