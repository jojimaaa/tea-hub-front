"use client"

import styled from "styled-components";
import z from "zod";
import FormTextInput from "@/atoms/FormTextInput";
import { UseFormReturn } from "react-hook-form"
import { useState } from "react";
import { WikiTopicSchema } from "@/interfaces/WikiSchemas";

import { PrimaryBaseButton } from "@/atoms/StyledAtoms";
import { DropdownListTopic } from "@/molecules/DropdownListTopic";


interface WikiSearchBarProps {
  placeholder: string;
  topicList: WikiTopicSchema[];
  listSearch?: any[];
  searchForm: UseFormReturn<z.infer<any>>;
}

const WikiSearchBar = ({placeholder, searchForm, topicList}:WikiSearchBarProps) => {
    const [search, setSearch] = useState("");

    const onSubmit = () => {
        searchForm.setValue("search", search);
    }

    return (
        <StyledContainer>
            <Form>
                <DropdownListTopic Items={topicList} searchForm={searchForm}/>
                <StyledFormInput
                    placeHolder={placeholder} 
                    value={searchForm.watch("filter")} 
                    setValue={setSearch}
                />
             
                <PrimaryBaseButton onClick={(e) => {
                    searchForm.handleSubmit(onSubmit)(e)
                }}>Pesquisar</PrimaryBaseButton>
            </Form>
        </StyledContainer>
    );
}

export default WikiSearchBar;

const StyledContainer = styled.div`
    margin-bottom:20px;
    margin-top: 30px;
    width: 70%;
    align-self: center;
`;

const StyledFormInput = styled(FormTextInput)`
    width: 100%;
    margin-right: 20px;
    margin-left: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

