import styled from 'styled-components';
import '../app/globals.css'

interface BotaoProps{
    Nome?:string;
    className?:string;
    onClick?: () => void;
}

function LineButton({Nome, className, onClick}:BotaoProps) {
    return (
        <Button className={className} onClick={onClick}>{Nome}</Button>
        // <Button className={classNameBt} onClick={onClick}>
        //     <Label className={classNameTxt}>{Nome}</Label>
        // </Button>
    );
}

export default LineButton;

const Button = styled.text`
    height: 50%;
    cursor: pointer;
    font-family: var(--font-montserrat);
    font-size: 15px;
    height: 100%;
    &:hover {
        text-decoration: underline;
    }
`;

// const Button = styled.button`
//     width: 140px;
//     height: 50%;
//     cursor: pointer;
// `;

// const Label = styled.h1`
//     font-family: var(--font-montserrat);
//     font-size: 15px;
//     height: 100%;
//     &:hover {
//         text-decoration: underline;
//     }
// `;