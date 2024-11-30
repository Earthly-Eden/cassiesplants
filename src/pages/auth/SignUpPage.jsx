import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as userService from "services/users";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
            <div className="text-rose-400 font-lato">{error}</div>

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
              onSubmit={async (values) => {
                if (values.username.length < 4) {
                  setError("username is too short");
                  return;
                }
                if (values.password.length < 4) {
                  setError("password is too short");
                  return;
                }
                if (values.password !== values["confirm password"]) {
                  setError("passwords do not match");
                  return;
                }
                console.log("username and password were accepted!!!");

                const response = await userService.createUser({
                  username: values.username,
                  password: values.password,
                });

                if (response.status === 201) {
                  setError('')
                  navigate("/", {
                    state: {
                      accountCreated: true,
                    },
                  });
                } else {
                  const data = await response.json();
                  setError(data.error);
                }
              }}
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
