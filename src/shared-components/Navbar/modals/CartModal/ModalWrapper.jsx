/* eslint-disable react/prop-types */
import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";

const ModalWrapper = (props) => {
  const { children, isOpen, onCloseClick } = props;
  const backgroundDivRef = useRef();

  if(!isOpen) {
    return null;
  }
  return (
    <>
      <RemoveScroll>
        <div 
        ref={backgroundDivRef}
        onClick={(e) => {
          if(e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
        className= "fixed top-0 left-0 w-full h-full items-start bg-black/30 backdrop-blur-sm flex justify-end font-lato">
          <button
            onClick={() => {
              onCloseClick(true);
            }}
          >
            <i className="text-4xl m-4 fixed top-0 right-0 fa-solid fa-circle-xmark rounded-full p-2 text-emerald-400 hover:text-emerald-100"></i>
          </button>
          {children}
        </div>
      </RemoveScroll>
    </>
  );
};

export default ModalWrapper;
