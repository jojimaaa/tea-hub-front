import styled from 'styled-components';
import '../app/globals.css'

interface BotaoProps{
    Nome?:string;
    classNameBt?:string;
    classNameTxt?:string;
    onClick?: () => void;
}

function LineButton({Nome, classNameBt, classNameTxt, onClick}:BotaoProps) {
    return (
        <Button className={classNameBt} onClick={onClick}>
            <Label className={classNameTxt}>{Nome}</Label>
        </Button>
    );
}

export default LineButton;

const Button = styled.button`
    width: 140px;
    height: 50%;
    cursor: pointer;
`;

const Label = styled.h1`
    font-family: var(--font-login-text);
    font-size: 15px;
    height: 100%;
    &:hover {
        text-decoration: underline;
    }
`;