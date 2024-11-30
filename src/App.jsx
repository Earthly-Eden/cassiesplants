import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import * as userservice from "services/users";
// import apiFetch from "./services/apiFetch";


// const response = await apiFetch("GET", "/api-key/info");

const App = () => {
  const [ sessionToken, setSessionToken ] = useState(() => userservice.getSessionStorage());

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
