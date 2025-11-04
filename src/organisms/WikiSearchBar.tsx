"use client"

import { Button } from "@/components/ui/button";
import FormInput from "@/molecules/FormInput";
import styled from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod";
import { WikiSearchTitle } from "@/interfaces/WikiSchemas";
import { useForm } from "react-hook-form"



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
        <Form onSubmit={searchForm.handleSubmit(onSubmit)}>
            <StyledFormInput 
                label={"Pesquisar por título"} 
                register={searchForm.register} 
                value={"title"} 
                setValue={searchForm.setValue}
            />
            <StyledButton onClick={(e) => {
                searchForm.handleSubmit(onSubmit)(e)
            }}>Pesquisar</StyledButton>
        </Form>
    );
}

export default WikiSearchBar;


const StyledFormInput = styled(FormInput)`
    width: 100%;
    margin-right: 10%;
`;

const Form = styled.form`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    size: 90%;`;

const StyledButton = styled(Button)`
    background-color: var(--primary-foreground);
    color: var(--primary);
    font-family: var(--font-login-text);
    border-radius: 5px;
`;