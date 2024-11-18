/* eslint-disable react/prop-types */

const FormContainer = (props) => {
  const { children } = props;
  return (
    <>
      <img
        src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
        className="w-20 my-2 mt-8"
      />
      <div className="font-playfair text-2xl text-emerald-600">{`Cassie's Plants`}</div>
      {children}
    </>
  );
};

export default FormContainer;
