import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/users";
import SessionContext from "contexts/SessionContext";
import { useState, useContext } from "react";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";
import Navbar from "shared-components/Navbar";

const SignInPage = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  const sessionContext = useContext(SessionContext);



  return (
    <>
    <Navbar/>
      <RedirectToPlantsIfSignedIn>
        <div className="flex">
          <div className="relative hidden md:flex brightness-75">
            <img
              src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
              className="h-screen"
            />
          </div>

          <div className="bg-emerald-50 flex flex-col justify-center items-center h-screen flex-1">
            <FormContainer>
              <div className="text-rose-400 font-lato">{error}</div>
              {location.state?.accountCreated && (
                <div className="mt-2 bg-emerald-300 p-4 rounded-lg text-green-600">
                  Account created successfully. Please sign in.
                </div>
              )}
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
                onSubmit={async (values) => {
                  const response = await userService.userSession({
                    username: values.username,
                    password: values.password,
                  });
                  const data = await response.json();
                  if (response.status === 201) {
                    //setting the session token
                    sessionContext.signIn(data.capstone_session_token);
                    setError("");
                  } else {
                    setError(data.error);
                  }
                }}
              />
              <Link to="/sign-up" className="text-emerald-500 font-lato underline">
                create an account
              </Link>
            </FormContainer>
          </div>
        </div>
      </RedirectToPlantsIfSignedIn>
    </>
  );
};

export default SignInPage;
