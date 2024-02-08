import React, { useEffect, useState } from "react";
import { FaArrowCircleUp, FaArrowUp } from "react-icons/fa";
import "./GoToTop.css";
const GoToTop = () => {
    const [isVisible,setisVisible]=useState(false);

  const gotobutton = () => {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  };

  const listentoscroll = () =>{
    let heightToHidden = 300;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if(winScroll>heightToHidden){
        setisVisible(true);

    }else{
        setisVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll",listentoscroll);
  }, []);

  return (
    <>
    {isVisible && (
    <div className="top-btn" onClick={gotobutton}>
      <FaArrowUp
        className="top-icon"
        size={20}
        style={{
          color: "white",
          padding: "15px",
        }}
      />
    </div>
    )}
    </>
  );
};

export default GoToTop;
