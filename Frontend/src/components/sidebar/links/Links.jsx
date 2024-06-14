import {motion} from "framer-motion";
const ivariants={
    open:{
        transition:{
            staggerChildren:0.15,
        }
    },
    closed:{
        transition:{
            staggerChildren: 0.05,
            staggerDirection:-1,
        }
    },
};

const itemvariants={
    open:{
        y:0,
        opacity:1,
    },
    closed:{
        y:50,
        opacity:0,
    },
};


const Links =()=> {
    const items=[
        "Homepage",
        "About",
        "Projects",
        "Contact"
    ]
        return (
            <motion.div className="links" variants={ivariants}>{items.map(item=>(
                    <motion.a href={`#${item}`} key={item} variants={itemvariants} whileHover={{scale:1.2}} whileTap={{scale:0.90}}>
                        {item}
                    </motion.a>
                ))}
            </motion.div>
        );
    };

export default Links