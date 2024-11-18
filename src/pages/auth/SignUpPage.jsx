import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
      <div className="flex">
        <div className="relative hidden md:flex brightness-75">
          <img
            src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
            className="brightness-75 h-screen"
          />
        </div>
        <div className="bg-emerald-50 flex flex-col justify-center items-center h-screen flex-1">
          <FormContainer>
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
            <Link to="/" className="text-emerald-500 font-lato underline">
              sign in
            </Link>
          </FormContainer>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
