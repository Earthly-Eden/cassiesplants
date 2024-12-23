import { useContext, useState } from "react";
import SessionContext from "contexts/SessionContext";
import { Link }  from "react-router-dom";

const Navbar = (props) => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav
      className=" bg-emerald-700  flex justify-center w-full h-24"
      onMouseLeave={() => {
        setUserMenuOpen(false);
      }}
    >
      <div className="w-full max-w-5xl items-center">
        <div className="flex ">
          <Link to="/plants">
            <div className="m-4  flex items-center">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
              />
              <div className="ml-4 font-playfair text-2xl text-white ">
                {"Cassie's Plants"}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative flex-1 flex justify-end mr-10">
        <button
          className="mr-2 flex justify-end text-white items-center"
          onClick={() => {
            setUserMenuOpen(true);
          }}
        >
          <i className="mr-1 fa-solid fa-user"></i>
          {username}
        </button>
        {userMenuOpen && (
          <button
            className="bg-white absolute bottom-[-10px] right-0 p-2 text-emerald-600 rounded-md shadow-md"
            onClick={signOut}
          >
            <i className=" mr-2 fa-solid fa-right-from-bracket"></i>
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
