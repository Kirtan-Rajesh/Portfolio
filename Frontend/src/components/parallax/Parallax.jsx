import "./parallax.scss";
import {motion,useScroll,useTransform} from "framer-motion";
import { useRef } from "react";
const Parallax =({type})=>{

    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target: ref,
        offset:["start start","end start"]
    });
    const yText=useTransform(scrollYProgress, [0,1] ,["-80%","400%"]);
    const yBg=useTransform(scrollYProgress, [0,1] ,["-10%","80%"]);
    const yText2=useTransform(scrollYProgress, [0,1] ,["-350%","400%"]);
    const yBg2=useTransform(scrollYProgress, [0,1] ,["-60%","80%"]);
    return (
        <div className="parallax" style={{background:type==="about" 
        ? "linear-gradient(180deg,#111132,#0c0c1d)"
        : "linear-gradient(180deg,#111132,#505064)",
        }}>
            <motion.h1 style={type==="about"?{y:yText}:{y:yText2}}>
                {type==="about"? "About Me" : "Projects"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div
  style={{
    y: type === "about" ? yBg : yBg2,
    backgroundImage: `url(${type === "about" ? "/public/planets.png" : "/public/sun.png"})`,
  }}
  className="planets"
></motion.div>

            <motion.div style={type==="about"?{x:yBg}:{x:yBg2}} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;