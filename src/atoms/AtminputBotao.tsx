import styled from 'styled-components';
import '../app/globals.css'
import { Button } from '@/components/ui/button';

interface AtminputBotaoProps {
    onClick: (e : any) => void
    className?:string
    value:string
}

function AtminputBotao({className,value, onClick}:AtminputBotaoProps) {
    return(
        <StyledButton className={className} onClick={(e) => onClick(e)} type="submit">
            {value}
        </StyledButton>
    );
}

export default AtminputBotao;

const StyledButton = styled(Button)`
    width: 100%;
    margin-top: 3%;
    border-radius: 4px;
    background-color: var(--primary-foreground);
    color: white;
    font-family: var(--font-montserrat);
    font-size: 18px;
    height: 10%;
    cursor: pointer;
`;