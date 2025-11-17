import FormTextArea from "@/atoms/FormTextArea";
import { StyledErrorLabel } from "@/atoms/StyledAtoms";
import { Button } from "@/components/ui/button";
import { ForumNewCommentSchema } from "@/interfaces/ForumSchemas";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";

interface CommentFormProps {
    className? : string,
    fieldErrors: FieldErrors<ForumNewCommentSchema>
    error?: Error,
    autoFocus?: boolean,
    loading: boolean,
    register: UseFormRegister<any>;
    value: string;
    setValue: UseFormSetValue<any>;
    handleSubmit: (e: any) => Promise<void>
}

const CommentForm = ({className, fieldErrors, error, autoFocus = false, loading, register, value, setValue, handleSubmit} : CommentFormProps) => {
    return (
        <StyledContainer className={className}>
            <StyledRow>
                <StyledInput 
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
                    {loading ? "Carregando" : "Comentar"}
                </StyledButton>
            </StyledRow>
            {error && <StyledErrorLabel>{error.message}</StyledErrorLabel>}
            {fieldErrors && <StyledErrorLabel>{fieldErrors.new_comment_body?.message}</StyledErrorLabel>}
        </StyledContainer>
    );
}

export default CommentForm;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    `;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

const StyledButton = styled(Button)<{$loading : boolean}>`
    background-color: var(--secondary);
    color: var(--primary);
    font-family: var(--font-montserrat);
    border-radius: 10px;
    height: 100%;
    opacity: ${props => props.$loading ? "20%" : "100%"}
`;

const StyledInput = styled(FormTextArea)`
    border-radius: 10px;
    padding: 10px;
    flex-grow: 1;
    resize: none;
    height: 70px;
    line-height: 1.4;
    border-color: var(--secondary);
    border-width: 1.5px;
    
    &:focus {
        border-color: var(--secondary);
        border-width: 2.5px;
        outline: none;
    }
`;

