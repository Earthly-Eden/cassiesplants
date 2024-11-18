import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <div className="flex">
        <div className="relative hidden md:flex brightness-75">
          <img
            src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
            className="h-screen"
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
              ]}
              signInButton="Sign in"
            />
            <Link to="/" className="text-emerald-500 font-lato underline">
              create an account
            </Link>
          </FormContainer>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
