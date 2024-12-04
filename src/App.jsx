import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import * as userservice from "services/users";
import SessionContext from "contexts/SessionContext";
import { jwtDecode } from "jwt-decode";
import PlantListPage from "pages/PlantListPage";

const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    userservice.getSessionTokenStorage()
  );

  return (
    <>
        <SessionContext.Provider
          value={{
            username: sessionToken ? jwtDecode(sessionToken).username : null,
            signIn: (token) => {
              setSessionToken(token);
              userservice.setSessionTokenStorage(token);
            },
            signOut: () => {
              setSessionToken(null);
              userservice.removeSessionTokenStorage();
            },
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/plants" element={<PlantListPage />} />
            </Routes>
          </BrowserRouter>
        </SessionContext.Provider>
    </>
  );
};

export default App;
