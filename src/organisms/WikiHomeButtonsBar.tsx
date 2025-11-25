
"use client"
import { PrimaryBaseButton } from "@/atoms/StyledAtoms";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const WikiHomeButtonsBar = () => {

    const router = useRouter();

    return (
    <StyledContainer>
        <StyledLabel>
            Mais Informações
        </StyledLabel>
        <StyledRow>
            <StyledButton
                onClick={() => router.push("wiki/postlist")}
            >Lista de Posts</StyledButton>
        </StyledRow>
    </StyledContainer>
    );
}

export default WikiHomeButtonsBar;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    height: 100%;

    background-color: #024E8D;
    height:250px;
`;

const StyledLabel = styled.text`
    font-family: var(--font-montserrat);
    font-size: 30px;
    width: 100%;
    margin-left: 10px;
    color: white;
`;

const StyledLabelContainer = styled.div`
    width: 100%;
    border-width: 0px 0px 1px 0px;
    border-color: var(--primary-foreground);
    margin-bottom: 10px;
`;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
    /* padding-inline: 20%; */
`;

const StyledButton = styled(PrimaryBaseButton)`
    background-color: var(--primary-foreground);
    color: var(--primary);
    font-size: 30px;
    padding: 20px;
    height: 50px;
    margin-top: 13px;

    border-radius: 10px;
    
    font-weight: 250;
    font-family: var(--font-montserrat);
    &:hover{ 
        cursor: pointer;
    }
`;