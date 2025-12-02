import styled from "styled-components";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface WikiRecomImgProps {
    url : string,
    current: number
}

export function WikiRecomImg({url, current} : WikiRecomImgProps) {
    return (
      <AnimatePresence mode="wait">
        <StyledContainerImg
          key={current}
          initial={{opacity: 1}}
          animate={{opacity: 1}}
          exit={{
            opacity: 0,
            transition: { delay:1 }
          }}       
        >
          <StyledImage src={url} fill alt=""/>
        </StyledContainerImg>
      </AnimatePresence>
    );
  }
export default WikiRecomImg;

const StyledContainerImg = styled(motion.div)`
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius:180px;
    border-top-left-radius:180px;
    position: relative;
    background-color: #BDBBDD;
    overflow: hidden;
`;
const StyledImage = styled(Image)`
    align-self: flex-end;
    margin-top: auto;
`;