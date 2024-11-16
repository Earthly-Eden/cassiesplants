/* eslint-disable react/prop-types */
const AuthForm = (props) => {
  const { fields, signInButton } = props;

  return (
    <form 
    className="p-4 m-4 bg-white border border-slate-200 w-64 rounded-lg text-lato shadow-xl"
    >
      {fields.map((field) => (
        <div key={field.label} className="flex flex-col">
          <label htmlFor={field.label} className="text-slate-500">{field.label}</label>
          <input id={field.label} type={field.type} className="pl-2 border border-slate-100 rounded-md focus:outline-emerald-700"/>
        </div>
      ))}
      <button className="mt-4 p-2 bg-emerald-600 rounded-lg w-full shadow-md">{signInButton}</button>
    </form>
  );
};

export default AuthForm;
