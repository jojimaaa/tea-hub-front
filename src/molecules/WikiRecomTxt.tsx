import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

interface WikiRecomTxtProps {
  title: string;
  topic: string;
  author: string;
  body: string;
  date: string;
  current: number;
}

export function WikiRecomTxt({title, topic, author, body, date, current}: WikiRecomTxtProps) {
    function cleanText(text: string) {
      return text.replace(/[\*\-]+/g, "").trim();
    }

    return (
      <AnimatePresence mode="wait">
        <StyledContainer
          key={current}
          initial={{opacity: 1}}
          animate={{opacity: 1}}
          exit={{
            opacity: 0,
            transition: { delay:1 }
          }}       
        >
          <StyledContainerTextos>
              <StyledTitle>{title.replace(/_/g, " ")}</StyledTitle>
              <StyledTopic>{topic.replace(/_/g, " ")}</StyledTopic>
              <StyledBody>{cleanText(body)}</StyledBody>
              <StyledContainerDesc>
                <StyledTxtAuthor>{author.replace(/_/g, " ")}</StyledTxtAuthor>
                <StyledTxtDate>{date}</StyledTxtDate>
              </StyledContainerDesc>
          </StyledContainerTextos>
        </StyledContainer>
      </AnimatePresence>
      
    );
  }
export default WikiRecomTxt;

const StyledContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 80%;
    justify-content: center;
`;

const StyledContainerTextos = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 40px;
    height: 100%;
`;

const StyledBody = styled.p`
    font-family: var(--font-login-text);
    font-size: 18px;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-top: 25px;
`;

const StyledTitle = styled.h1`
    font-family: var(--font-login-text);
    font-size: 36px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    color: #2713A4;
    line-height: 1.1;
`;

const StyledTopic = styled.p`
    font-family: var(--font-login-text);
    font-size: 18px;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    color: #4B0082;
`;

const StyledContainerDesc = styled.div`
    margin-top: auto;
    flex-direction: row;
    display: flex;
`;

const StyledTxtAuthor = styled.p`
  font-family: var(--font-login-text);
  font-size: 14px;
  color: #4B0082;
  margin-right: 20px;
`;

const StyledTxtDate = styled.p`
  font-family: var(--font-login-text);
  font-size: 14px;
  color: #4B0082;
`;