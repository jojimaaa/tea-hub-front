import { motion,AnimatePresence } from "framer-motion";
import '../app/globals.css'
import { useState } from "react";

interface LoginzadaProps{
  itemsE: React.ReactNode[];
  itemsD: React.ReactNode[];
  index: number
};

function Loginzada({itemsE, itemsD, index}:LoginzadaProps){
    const [direction, setDirection] = useState(0);
    return (
        <div style={{
          transform: "rotateX(30deg)",
          transformStyle: "preserve-3d",
          perspective: "3000px",
        }}
        className={"relative z-0 h-[60%] w-[60%] rounded-xl text-black"}>
            <AnimatePresence mode="sync">
                <motion.div
                  style={{
                    y: "-50%",
                    x: "-50%",
                    backfaceVisibility: "hidden",
                    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                    zIndex: index+1,
                    
                  }}
                  initial={{ rotateY: "0deg"}}
                  animate={{ rotateY: "0deg" }}
                  exit={{ rotateY: "180deg"}}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  key={index}
                  onAnimationComplete={() => setDirection(direction==1?prev =>prev-1: prev=>prev+1)}
                  className="bg-primary absolute left-1/2 top-1/2 border border-black rounded-2xl h-[100%] w-[100%]"
                >
                    {itemsE[index]}
                </motion.div>

                <motion.div
                  style={{
                    y: "-50%",
                    x: "-50%",
                    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                    zIndex: -index,
                    backfaceVisibility: "hidden"
                  }}
                  initial={{ rotateY: direction==0?"0deg":"-180deg"}}
                  animate={{ rotateY: "0deg" }}
                  exit={{ rotateY: "0deg"}}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  key={(index+1)*2}
                  className="bg-primary absolute left-1/2 top-1/2 border rounded-2xl border-black h-[100%] w-[100%]"
                >
                    {itemsD[index]}
                </motion.div>

                <hr 
                  style={{
                  transform: "translateZ(1px)",
                }}
                className="absolute left-1/2 z-[2] border-2 border-neutral-800 h-[100%]"/>
            </AnimatePresence>
        </div>
    );
}

export default Loginzada

