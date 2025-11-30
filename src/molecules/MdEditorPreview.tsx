import FormTextArea from "@/atoms/FormTextArea";
import { StyledMarkdownBody } from "@/atoms/StyledAtoms";
import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";

interface MdEditorPreviewProps {
    className? : string,
    setMdValue : Dispatch<SetStateAction<string>>
    mdValue : string,
    defaultValue? : string;
    formRegister: UseFormRegister<any>;
    placeHolder?: string;
    formValue: string;
    setFormValue: UseFormSetValue<any>,
}

const MdEditorPreview = ({
    className,
    setMdValue,
    mdValue,
    defaultValue,
    formRegister,
    placeHolder,
    formValue,
    setFormValue

} : MdEditorPreviewProps) => {

    
    return  <StyledEditorCol>
                <StyledBodyInput
                    className={className}
                    placeHolder={placeHolder}
                    defaultValue={defaultValue}
                    setInstantValue={setMdValue}
                    register={formRegister}
                    setValue={setFormValue}
                    value={formValue}
                />
                <StyledPreview 
                    className={className}
                    placeHolder="Visualize aqui como seu post vai ficar."
                    markdownContent={mdValue}
                />
            </StyledEditorCol>
}

export default MdEditorPreview;

const StyledEditorCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* min-height: 650px; */
    overflow-x: auto;
`;

const StyledBodyInput = styled(FormTextArea)`
    min-height: 300px;
    max-height: 300px;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    border-width: 1px;
    border-radius: 10px;
    padding: 10px;
    flex: 1;
    border-color: var(--secondary);
    border-width: 1.5px;
    font-family: var(--font-arial, sans-serif);
    font-size: 17px;
    color: var(--primary-foreground);
    overflow-wrap: break-word;
    line-height: 1.6; // Melhora a leitura do texto
    margin-bottom: 10px;
    
    &:focus {
        border-color: var(--secondary);
        border-width: 2.5px;
        outline: none;
    }
    
`;

const StyledPreview = styled(StyledMarkdownBody)`
    /* min-height: 600px; */
    min-height: 300px;
    max-height: 300px;
    min-width: 100%;
    max-width: 100%;
    /* min-width: 600px;
    max-width: 600px; */
    height: auto;
    border-width: 1px;
    
    border-radius: 10px;
    padding: 10px;
    height: auto;
    border-color: var(--secondary);
    border-width: 1.5px;
    font-family: var(--font-arial);
    color: var(--primary-foreground);
    margin-bottom: 10px;
    overflow-wrap: break-word;
    overflow-y: auto;   /* garante scroll se faltar espaço */
    
    &:focus {
        border-color: var(--secondary);
        border-width: 2.5px;
        outline: none;
    }
`;