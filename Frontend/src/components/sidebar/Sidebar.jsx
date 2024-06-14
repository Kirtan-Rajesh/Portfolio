import Links from "./links/Links";
import "./sidebar.scss";
import {motion} from "framer-motion";
import ToggleButton from "./togglebutton/ToggleButton";
import { useState } from "react";

const variants={
    open:{
        clipPath: "circle(1200px at 40px 40px)",
        transition:{
        type:"spring",
        stiffness : 20,
        }
    },
    closed:{
        clipPath: "circle(25px at 40px 40px)",
        transition:{
            type:"spring",
            stiffness : 400,
            damping:40,
        },
    },
}
const Sidebar = ()=>{
    const [open,setOpen]=useState(false)


        return <motion.div className="sidebar" animate={open? "open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
}

export default Sidebar;