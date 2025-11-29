'use client'
import FormTextArea from "@/atoms/FormTextArea";
import { PrimaryBaseButton, StyledMarkdownBody, StyledPageContainer } from "@/atoms/StyledAtoms";
import { ForumPostSchema } from "@/interfaces/ForumSchemas";
import FormInput from "@/molecules/FormInput";
import ForumTopicDropdown from "@/organisms/ForumTopicDropdown";
import MdEditorPreview from "@/organisms/MdEditorPreview";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import z from "zod";

const postFormSchema = z.object({
        // title: z.string().min(1, "Um título é necessaria para criar um post."),
        // body: z.string().min(1, "Uma mensagem é necessaria para criar um post."),
        // topic_id: z.int().min(10, "Selecione um tópico para criar o post.")
        title: z.string(),
        body: z.string(),
        topic_id: z.int()
});

const CreateForumPostPage = () => {
    const [md, setMd] = useState("");

    const postForm = useForm<z.infer<typeof postFormSchema>>({
        resolver: zodResolver(postFormSchema),
        defaultValues: {
            body: "",
            title: "",
            topic_id: 0,
        }
    });

    useEffect(() => {
        postForm.register("title");
        postForm.register("body");
        postForm.register("topic_id");
    }, [])

    const onSubmit = (values : ForumPostSchema) => {
        console.log(values)
    }

    return(
        <StyledPageContainer>
            <StyledTitleInput
                label="Título"
                placeHolder="Escreva aqui o título do seu post. (Aceita Markdown)"
                value="title"
                setValue={postForm.setValue}
                register={postForm.register}
            />
            <MdEditorPreview
                setMdValue={setMd}
                mdValue={md}
                placeHolder="Escreva aqui seu post."
                formRegister={postForm.register}
                formValue="body"
                setFormValue={postForm.setValue}
            />
            <StyledRow>
                <ForumTopicDropdown
                    enableNoSelection={false}
                    value="topic_id"
                    setValue={postForm.setValue}
                />
                <PrimaryBaseButton
                    onClick={(e) => {
                        e.preventDefault();
                        postForm.handleSubmit(onSubmit)(e);
                    }}
                >
                    Criar Post
                </PrimaryBaseButton>
            </StyledRow>
        </StyledPageContainer>

    );
}

export default CreateForumPostPage;   

const StyledRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 35%;
    margin-bottom: 10px;
    margin-top: 10px;
`;


const StyledTitleInput = styled(FormInput)`
    margin-top: 15px;
    max-width: 48.5%;
    margin-bottom: 10px;
    font-family: var(--font-lexend-exa);
    color: var(--primary-foreground);
    font-size: 25px;
    overflow-wrap: break-word;

    @media (max-width: 1600px) {
        max-width: 85%;
        flex-direction: column;
        align-items: center;
    }
`;

