"use client"

import styled from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod";
import { WikiSearchTitle } from "@/interfaces/WikiSchemas";
import { useForm } from "react-hook-form"
import FormTextInput from "@/atoms/FormTextInput";
import { PrimaryBaseButton } from "@/atoms/StyledAtoms";



const WikiSearchBar = () => {

    const searchFormSchema = z.object({
        title: z.string(),
    });

    const searchForm = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: { title: ""}
    });

    const onSubmit = (values : WikiSearchTitle) => {
        console.log(values);
    }

    return (
        <StyledContainer>
            <Label>Pesquise por título</Label>
            <Form onSubmit={searchForm.handleSubmit(onSubmit)}>
                <StyledFormInput
                    placeHolder="Pesquise por título" 
                    register={searchForm.register} 
                    value={"title"} 
                    setValue={searchForm.setValue}
                />
                <PrimaryBaseButton onClick={(e) => {
                    searchForm.handleSubmit(onSubmit)(e)
                }}>Pesquisar</PrimaryBaseButton>
            </Form>
        </StyledContainer>
    );
}

export default WikiSearchBar;

const StyledContainer = styled.div``;

const StyledFormInput = styled(FormTextInput)`
    width: 100%;
    margin-right: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Label = styled.h1`
    font-family: var(--font-montserrat);
    font-size: 18px;
`;

