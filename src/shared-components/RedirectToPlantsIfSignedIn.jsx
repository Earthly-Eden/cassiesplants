
import { useContext, useEffect } from "react";
import SessionContext from "contexts/SessionContext";
import { useNavigate } from "react-router-dom";

const RedirectToPlantsIfSignedIn = (props) => {
  const navigate = useNavigate();
  const { username } = useContext(SessionContext)

  useEffect(() => {
    if(username !== null) {
      navigate("/plants")
    }
  }, [username]);

return props.children;


}

export default RedirectToPlantsIfSignedIn;