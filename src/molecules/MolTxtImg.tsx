import { motion } from "framer-motion";
import '../app/globals.css'
interface MolTxtImgProps{
    className?: string;
    TextoGiga:string;
    TextoMini:string;
}

function MolTxtImg({className, TextoGiga, TextoMini}:MolTxtImgProps) {
    return(
        <motion.div className={className}
        initial={{ top:0, opacity: 0 }} 
        animate={{ top:"50%", opacity: 1 }}  
        transition={{ duration: 3, ease: "easeOut" }} 
        >
            <h1 className="font-[Virgil] text-[50px]">{TextoGiga}</h1>
            <h1 className="font-[Virgil] text-[22px] mt-[2%]">{TextoMini}</h1>
        </motion.div>
    );
}

export default MolTxtImg