'use client'
import { PrimaryBaseButton, StyledLabeledTitleInput, StyledPageContainer } from "@/atoms/StyledAtoms";
import { ForumPostSchema } from "@/interfaces/ForumSchemas";
import FormInput from "@/molecules/FormInput";
import ForumTopicDropdown from "@/organisms/ForumTopicDropdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import z from "zod";
import MdButtonForm from "@/organisms/MdButtonForm";
import { createForumPost } from "@/services/forumServices";
import { useAsyncFn } from "@/hooks/useAsync";
import TitleLabel from "@/atoms/TitleLabel";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const postFormSchema = z.object({
        title: z.string().min(1, "Um título é necessaria para criar um post."),
        body: z.string().min(1, "Uma mensagem é necessaria para criar um post."),
        topic_id: z.int().min(10, "Selecione um tópico para criar o post.")
        // title: z.string(),
        // body: z.string(),
        // topic_id: z.int()
});

const CreateForumPostPage = () => {
    const [md, setMd] = useState("");
    const router = useRouter();
    const {loading, error, value, execute : createPostAsync} = useAsyncFn(createForumPost)

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

    const onSubmit = async (values : ForumPostSchema) => {
        const response = await createPostAsync(values.title, values.body, values.topic_id);
        if (response) router.push(`/forum/post/${response.id}`)
        else toast.error(`Erro ao criar post, tente novamente ou contate os administradores.`);
    }

    return(
        <Container>
            <Toaster/>
            <TitleLabel
                title="Crie seu post no Forum TEA-HUB"
            />
            <StyledRow>
                <StyledLabeledTitleInput
                    label="Título"
                    placeHolder="Escreva aqui o título do seu post."
                    value="title"
                    setValue={postForm.setValue}
                    register={postForm.register}
                />
                <StyledDropdown
                    enableNoSelection={false}
                    value="topic_id"
                    setValue={postForm.setValue}
                />

            </StyledRow>
            <MdButtonForm
                fieldErrors={postForm.formState.errors}
                error={error} 
                buttonText={"Criar post"}
                loading={loading}
                setMdValue={setMd}
                mdValue={md}
                placeHolder="Escreva aqui seu post. (Aceita Markdown)"
                formRegister={postForm.register}
                formValue="body"
                setFormValue={postForm.setValue}
                handleSubmit={postForm.handleSubmit(onSubmit)}
            />
        </Container>

    );
}

export default CreateForumPostPage;   

const Container = styled(StyledPageContainer)`
    padding-inline: 15%;
`;

const StyledRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 10px;
    gap: 15px;
`;

const StyledDropdown = styled(ForumTopicDropdown)`
    height: 43px;
    width: 100px;
    background-color: var(--secondary);
`;



