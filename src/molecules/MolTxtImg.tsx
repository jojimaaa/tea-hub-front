import { motion } from "framer-motion";
import '../app/globals.css'
import styled from "styled-components";
interface MolTxtImgProps{
    className?: string;
    TextoGiga:string;
    TextoMini:string;
}

function MolTxtImg({className, TextoGiga, TextoMini}:MolTxtImgProps) {
    return(
        <motion.div className={className}
        initial={{ top:0, opacity: 0 }} 
        animate={{ top:"30%", opacity: 1 }}  
        transition={{ duration: 3, ease: "easeOut" }} 
        >
            <GigaLabel>{TextoGiga}</GigaLabel>
            <MiniLabel>{TextoMini}</MiniLabel>
        </motion.div>
    );
}

export default MolTxtImg;

const GigaLabel = styled.h1`
    font-family: var(--font-montserrat);
    font-weight: 200;
    font-size: 50px;
`;

const MiniLabel = styled.h1`
    font-family: var(--font-montserrat);
    font-weight: 300;
    font-size: 22px;
    margin-top: 2%;
`;