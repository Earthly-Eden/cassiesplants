import AuthForm from "./AuthForm";
const SignUpPage = () => {
  return (
    <>
    <div className="flex justify-center items-center">
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        signInButton="Create account"
      />


    </div>
    </>
  );
};

export default SignUpPage;
