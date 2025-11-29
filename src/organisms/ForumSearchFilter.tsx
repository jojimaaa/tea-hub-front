import { ForumFilterSchema } from "@/interfaces/ForumSchemas";
import FormInput from "@/molecules/FormInput";
import { UseFormReturn } from "react-hook-form";
import styled from "styled-components";
import ForumTopicDropdown from "./ForumTopicDropdown";
import { PrimaryBaseButton } from "@/atoms/StyledAtoms";

interface ForumSearchFilterProps {
    className? : string,
    form: UseFormReturn<ForumFilterSchema, any, ForumFilterSchema>,
}

const ForumSearchFilter = ({className, form} : ForumSearchFilterProps) => {
    return(
        <StyledContainer className={className}>
            <TitleInput
                label={"Buscar por título"}
                register={form.register}
                value="title"
                setValue={form.setValue}
            />
            <TopicDropdown
                value="topic_id"
                setValue={form.setValue}
            />
        </StyledContainer>
    );
}

export default ForumSearchFilter

const StyledContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: end;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

const TitleInput = styled(FormInput)`
`;

const TopicDropdown = styled(ForumTopicDropdown)`
`;