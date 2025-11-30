import ForumTitleLineButton from "@/atoms/ForumTitleLineButton";
import { Label } from "@/components/ui/label";
import { ForumPostBase } from "@/interfaces/ForumSchemas";
import { getForumTopics } from "@/services/forumServices";
import { ColumnDef } from "@tanstack/react-table";
import styled from "styled-components";

const topics = await getForumTopics();

export const forumPostColumns: ColumnDef<ForumPostBase>[] = [
    {
        accessorKey: "title",
        header: "Título",
        cell: ({row}) => {
            const id = row.original.id;
            const title = row.original.title;
            if(id && title){
                return (
                <StyledCell>
                    <StyledLineButton title={title} slug={id}/>
                </StyledCell>)
            }
        }
    },
    {
        accessorKey: "user",
        header: "Autor",
        cell: ({row}) => {
            const user = row.original.user;

            if(user) return (
                <StyledCell>
                    <StyledText>{user.name}</StyledText>
                </StyledCell>
            );
            else return (
                <StyledCell>
                    <StyledText>Erro ao buscar usuário</StyledText>
                </StyledCell>
            ) 
        }
    },
    {
        accessorKey: "topic",
        header: "Tópico",
        cell: ({row}) => {
            const topic = row.original.topic;
            if(topic && topics.filter((e) => e.id == topic.id)[0]){
                return (
                <StyledCell>
                    <StyledText>
                        {topics.filter((e) => e.id == topic.id)[0].name}
                    </StyledText>
                </StyledCell>)
            }
            return <StyledCell>Tipo não encontrado</StyledCell>
        }
    },
    {
        accessorKey: "created_at",
        header: "Data de publicação",
        cell: ({row}) => {
            const dateObj = new Date(row.getValue("created_at"));
            const formatter = new Intl.DateTimeFormat('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const formatedDate = formatter.format(dateObj);
            return (
                <StyledCell>
                    <StyledText>{formatedDate}</StyledText>
                </StyledCell>

            );
        },
    },
    {
      accessorKey: "likeCount",
      header: "Likes",
      cell: ({row}) => {return row.original.like_count.toString()}  
    }
]

const StyledCell = styled.div`

`;

const StyledText = styled(Label)`
    color: var(--primary-foreground);
    font-family: var(--font-arial);
`;

const StyledLineButton = styled(ForumTitleLineButton)`
    color: var(--primary-foreground);
    font-family: var(--font-arial);
`;