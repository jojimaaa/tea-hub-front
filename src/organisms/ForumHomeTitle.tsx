import { Label } from "@/components/ui/label";
import styled from "styled-components";
const ForumHomeTitle = () => {
    return(
        <StyledTitle>
            Forum TEA-HUB
        </StyledTitle>
    );
}

const Hbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100px;
  border: 1px solid black;
`;

const StyledTitle = styled.div`
    margin-top: 20px;
    font-family: var(--font-tea-hub);
    font-size: 40px; 
`;

export default ForumHomeTitle