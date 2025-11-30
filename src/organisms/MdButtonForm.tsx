import FormTextArea from "@/atoms/FormTextArea";
import { PrimaryBaseButton, StyledErrorLabel } from "@/atoms/StyledAtoms";
import { Button } from "@/components/ui/button";
import { ICommentForm } from "@/interfaces/ForumSchemas";
import MdEditorPreview from "@/molecules/MdEditorPreview";
import { Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";

interface MdButtonFormProps {
    className? : string,
    fieldErrors: FieldErrors<ICommentForm>
    placeHolder?: string,
    initialvalue?: string,
    error?: Error,

    loading: boolean,
    buttonText: string,
    handleSubmit: (e: any) => Promise<void>

    setMdValue : Dispatch<SetStateAction<string>>
    mdValue : string,
    defaultValue? : string;
    formRegister: UseFormRegister<any>;
    formValue: string;
    setFormValue: UseFormSetValue<any>,
}

const MdButtonForm = ({
    className, 
    fieldErrors, 
    error, 
    buttonText, 
    loading, 
    setMdValue,
    mdValue,
    defaultValue,
    formRegister,
    placeHolder,
    formValue,
    setFormValue,
    handleSubmit
} : MdButtonFormProps) => {
    return (
        <StyledContainer className={className}>
            <StyledInput 
                defaultValue={defaultValue}
                placeHolder={placeHolder}
                formRegister={formRegister}
                formValue={formValue}
                setFormValue={setFormValue}
                setMdValue={setMdValue}
                mdValue={mdValue}
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
            {error && <StyledErrorLabel>{error.message}</StyledErrorLabel>}
            {fieldErrors && <StyledErrorLabel>{fieldErrors.comment_body?.message}</StyledErrorLabel>}
        </StyledContainer>
    );
}

export default MdButtonForm;

const StyledContainer = styled.div`
    gap: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* min-height: 650px; */
    overflow-x: auto;
`;

const StyledButton = styled(PrimaryBaseButton)<{$loading : boolean}>`
    background-color: var(--secondary);
    border-radius: 10px;
    height: auto;
    opacity: ${props => props.$loading ? "20%" : "100%"};
    width: 100%;
`;

const StyledInput = styled(MdEditorPreview)`
    min-height: 320px;
    max-height: 320px;
    width: 100%;
    flex-grow: 1;
`;

