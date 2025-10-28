import styled from 'styled-components';
import '../app/globals.css'

interface AtminputBotaoProps {
    classNameBt?:string;
    classNameInput?:string
    value:string
}

function AtminputBotao({classNameInput,value}:AtminputBotaoProps) {
    return(
        <StyledButton type="submit">
            <Input type="submit" value={value}/>
        </StyledButton>
    );
}

export default AtminputBotao;

const StyledButton = styled.button`
    width: 70%;
    height: 32px;
    margin-top: 6%;
    border-radius: 4px;
    background-color: var(--primary-foreground);
`;

const Input = styled.input`
    color: white;
    font-family: var(--font-text);
    font-size: 22px;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;