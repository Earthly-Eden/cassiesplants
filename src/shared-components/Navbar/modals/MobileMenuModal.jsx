/* eslint-disable react/prop-types */
import SessionContext from "contexts/SessionContext";
import { useContext } from "react";


const MobileMenuModal = (props) => {
  const { username, signOut } = useContext(SessionContext);
  const { onCartOpenClick } = props;

 
  return (
    <>
    <div className="items-start  pb-6 pt-16 pr-12 text-lg flex flex-col bg-emerald-800 text-emerald-200 rounded-bl-lg shadow-md">
      <div className="px-12 py-4">
        <i className="mr-2 text-2xl fa-solid fa-user"/>
        {username}
      </div>
      <button 
      onClick={signOut}
      className="hover:text-emerald-100 px-12 py-4">
        <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket" />
        Sign out
      </button>
      <button 
      onClick={onCartOpenClick}
      className="hover:text-emerald-100 px-12 py-4">
      <i className="mr-2 text-2xl fa-solid fa-cart-shopping"></i>
        Cart
      </button>
    </div>
    
    </>
  )
};
export default MobileMenuModal