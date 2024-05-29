import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export const BoxModal1 = ({ icons, heading, subHeading, text }) => {
  const [read, setRead] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleRead = () => {
    setRead(!read);
  };

  return (
    <motion.div className="box"
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="icon">{icons}</div>
      <h5>{heading}</h5>
      <h6>{subHeading}</h6>
      <motion.p
        style={{ maxHeight: read ? "100%" : "3.5rem", overflow: "hidden" }}
        initial={false}
        animate={{ maxHeight: read ? "100%" : "3.5rem" }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.p>
      <motion.button
        onClick={handleRead}
        className="btn"
        style={read ? { backgroundColor: "white", color: "black" } : { backgroundColor: "black", color: "white" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {read ? "read less" : "read more"}
      </motion.button>
    </motion.div>
  );
};
