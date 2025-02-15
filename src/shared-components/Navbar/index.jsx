import { useContext, useState } from "react";
import SessionContext from "contexts/SessionContext";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/CartModal/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";

const Navbar = (props) => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <>
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
        <div className="hidden sm:flex text-xl flex-1  justify-end  min-w-[240px]">
          <button
            className="mr-2 flex justify-end text-white items-center"
            onClick={() => {
              setUserMenuOpen(true);
            }}
            >
            <i className="mr-2 fa-solid fa-user"></i>
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
      <button 
      className="text-white text-xl mr-6"
      onClick={() => setCartOpen(true)}
      >
      <i className="mr-2 fa-solid fa-cart-shopping"></i>
        cart
      </button>
        </div>
        <button 
        onClick={() => setMobileMenuOpen(true)}
        className="my-2 mx-4 sm:hidden flex items-center">
        <i className="text-4xl text-emerald-400 fa-solid fa-bars"></i>
        </button>
      </nav>
        
            
            <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
              <CartModal setCartOpen={setCartOpen} />
            </ModalWrapper>
            <ModalWrapper isOpen={mobileMenuOpen} onCloseClick={() => setMobileMenuOpen(false)} >
              <MobileMenuModal onCartOpenClick={() => {
                setCartOpen(true)
                setMobileMenuOpen(false)
              }} />
            </ModalWrapper>

          
    </>
  );
};

export default Navbar;
