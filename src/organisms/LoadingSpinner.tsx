import { Spinner } from "@/components/ui/spinner";
import { Label } from "@radix-ui/react-label";
import styled from "styled-components";

interface LoadingSpinnerProps {
    className? : string,
    label : string,
    text : string,
}

const LoadingSpinner = ({
    className,
    label,
    text
} : LoadingSpinnerProps) => {
    return(
    <Centralizer className={className}>
        <StyledSpinner/>
        <StyledLabel>{label}</StyledLabel>
        <StyledBody>{text}</StyledBody>
    </Centralizer>)
}

export default LoadingSpinner;

const StyledSpinner = styled(Spinner)`
    width: 30px;
    height: 30px;
`;

const Centralizer = styled.div`
    flex-direction: column;
    display: flex;
    height: 95vh;
    gap: 15px;
    align-items: center;
    justify-content: center;
`;

const StyledLabel = styled(Label)`
    font-family: var(--font-lexend-exa);
    color: var(--primary-foreground);
    font-size: 25px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    overflow-wrap: break-word;
`;

const StyledBody = styled(Label)`
    font-family: var(--font-arial);
    font-size: 17px;
    color: var(--primary-foreground);
    .break-line::after {
        content: "\A"; /* Inserts a new-line character */
        white-space: pre; /* Preserves whitespace, including new-lines */
    }
`;