import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const WikiHomeButtonsBar = () => {

    const router = useRouter();

    return (
    <StyledContainer>
        <StyledLabelContainer>
            <StyledLabel>
                Mais Informações
            </StyledLabel>
        </StyledLabelContainer>
        <StyledRow>
            <StyledButton
                onClick={() => router.push("/wiki")}
            >Lista de Posts</StyledButton>
            <StyledButton
                onClick={() => router.push("/wiki")}
            >Lista de Tópicos</StyledButton>
        </StyledRow>
    </StyledContainer>
    );
}

export default WikiHomeButtonsBar;

const StyledContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    height: 100%;
    margin-bottom: 40px;
`;

const StyledLabel = styled.text`
    font-family: var(--font-login-text);
    font-size: 30px;
    width: 100%;
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
    justify-content: space-between;
    align-items: center;
    padding-inline: 20%;
`;

const StyledButton = styled(Button)`
    background-color: var(--primary-foreground);
    color: var(--primary);
    font-size: 30px;
    padding: 20px;
    height: 50px;
    margin-top: 13px;

    border-radius: 10px;
    
    font-weight: 250;
    font-family: var(--font-login-text);
    &:hover{ 
        cursor: pointer;
    }
`;