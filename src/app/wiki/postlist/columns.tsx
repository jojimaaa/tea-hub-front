import WikiTitleLineButton from "@/atoms/TitleLineButton";
import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import { getTopicList } from "@/services/wikiServices";
import { ColumnDef } from "@tanstack/react-table";
import styled from "styled-components";

const topics = await getTopicList();

export const columns: ColumnDef<WikiPostSchema>[] = [
    {
        accessorKey: "title",
        header: "Título",
        cell: ({row}) => {
            const id = row.getValue("id")?.toString();
            const title = row.getValue("title")?.toString();
            if(id && title){
                return (
                <StyledCell>
                    <StyledLineButton title={title} slug={id}/>
                </StyledCell>)
            }
        }
    },
    {
        accessorKey: "author_name",
        header: "Autor"
    },
    {
        accessorKey: "topic_id",
        header: "Tópico",
        cell: ({row}) => {
            const topic_id = row.getValue("topic_id");
            if(topics && topics.filter((e) => e.id == topic_id)[0]){
                return (
                <StyledCell>
                    <StyledText>
                        {topics.filter((e) => e.id == topic_id)[0].name}
                    </StyledText>
                </StyledCell>)
            }
            return <StyledCell>Tipo não encontrado</StyledCell>
        }
    },
    {
        accessorKey: "created_date",
        header: "Data de publicação",
        cell: ({row}) => {
            const dateObj = new Date(row.getValue("created_date"));
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
        accessorKey: "id",
        header: "",
        cell: ({row}) => {return (<></>)}
    },

]

const StyledCell = styled.div`

`;

const StyledText = styled.text`
    color: var(--primary-foreground);
    font-family: var(--font-text);
`;

const StyledLineButton = styled(WikiTitleLineButton)`
    color: var(--primary-foreground);
    font-family: var(--font-text);
`;