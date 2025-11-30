import FormTextArea from "@/atoms/FormTextArea";
import { StyledErrorLabel } from "@/atoms/StyledAtoms";
import { Button } from "@/components/ui/button";
import { ICommentForm } from "@/interfaces/ForumSchemas";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";

interface TextButtonFormProps {
    className? : string,
    fieldErrors: FieldErrors<ICommentForm>
    placeHolder?: string,
    initialvalue?: string,
    error?: Error,

    loading: boolean,
    buttonText: string,
    register: UseFormRegister<any>;
    value: string;
    setValue: UseFormSetValue<any>;
    handleSubmit: (e: any) => Promise<void>
}

const TextButtonForm = ({className, fieldErrors, placeHolder, error, buttonText, loading, register, value, setValue, handleSubmit} : TextButtonFormProps) => {
    return (
        <StyledContainer className={className}>
            <StyledRow>
                <StyledInput 
                    placeHolder={placeHolder}
                    register={register}
                    value={value}
                    setValue={setValue}
                />
                <StyledButton 
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                    }}
                    $loading={loading}
                >
                    {loading ? "Carregando" : buttonText}
                </StyledButton>
            </StyledRow>
            {error && <StyledErrorLabel>{error.message}</StyledErrorLabel>}
            {fieldErrors && <StyledErrorLabel>{fieldErrors.comment_body?.message}</StyledErrorLabel>}
        </StyledContainer>
    );
}

export default TextButtonForm;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    `;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    /* align-items: center; */
    align-items: stretch;
`;

const StyledButton = styled(Button)<{$loading : boolean}>`
    background-color: var(--secondary);
    color: var(--primary);
    font-family: var(--font-montserrat);
    border-radius: 10px;
    height: auto;
    opacity: ${props => props.$loading ? "20%" : "100%"}
`;

const StyledInput = styled(FormTextArea)`
    border-radius: 10px;
    padding: 10px;
    flex-grow: 1;
    line-height: 1.4;
    border-color: var(--secondary);
    border-width: 1.5px;
    
    &:focus {
        border-color: var(--secondary);
        border-width: 2.5px;
        outline: none;
    }
`;

