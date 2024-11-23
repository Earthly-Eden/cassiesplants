/* eslint-disable react/prop-types */
import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, signInButton, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  const [ loading, setLoading ] = useState(false)

  //this will long our user's current input in each of the
  //signInPage component and signUpPagae component
  console.log(values);

  return (
    <div className="">
      <form 
       onSubmit={async (e) => {
        e.preventDefault()
        setLoading(true)
        await onSubmit(values)
        setLoading(false)
      }}
      className="p-4 m-4 bg-white border border-slate-200 w-64 rounded-lg text-lato shadow-xl">
        {fields.map((field) => (
          <Field
            key={field.label}
            label={field.label}
            type={field.type}
            value={values[field.label]}
            onChange={(e) => {
              setValues({ ...values, [field.label]: e.target.value });
            }}
          />
        ))}
        <button className=" mt-4 p-2 bg-emerald-600 rounded-lg w-full shadow-md text-white relative">
          {signInButton}
          {
            loading && (
          <div className="flex justify-end h-full items-center right-4">
            <i className=" absolute fa-solid fa-spinner text-xl text-emerald-300 animate-spin mb-5"></i>
          </div>

            )
          }
        </button>
      </form>
      
    </div>
  );
};

export default AuthForm;
