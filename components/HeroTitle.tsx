import React from "react";
import {motion} from "framer-motion"

const HeroTitle = () => {
  return (
    <div className="absolute flex items-center justify-between">
      <motion.p className="text-white text-7xl block z-10 font-extrabold">
        FORMULATEAI
      </motion.p>
    </div>
  );
};

export default HeroTitle;
