import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'

export const BoxModal1 = ({ icons, heading, subHeading, text }) => {
  const [read, setRead] = useState(false);
  const [ref, inView]=useInView({
    triggerOnce:true,
    threshold:0.5,
  })
  
  const handleRead = () => {
    setRead(!read);
  };
  return (
    <motion.div className="box" 
    ref={ref}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: inView? 1:0, scale:inView? 1:0 }}
    transition={{ duration: 1}}
    >
      <div className="icon">{icons}</div>
      <h5>{heading}</h5>
      <h6>{subHeading}</h6>
      <p>{read ? text : text.slice(0, 400)}</p>
      <button
        onClick={handleRead}
        className="btn"
        style={
          read
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "black", color: "white" }
        }
      >
        {read ? "read less" : "read more"}
      </button>
    </motion.div>
  );
};
