import WikiTitleLineButton from "@/atoms/WikiTitleLineButton";
import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import { WikiTopicSchema } from "@/interfaces/WikiSchemas"; // Importe a interface do tópico (ajuste o nome se necessário)
import { ColumnDef } from "@tanstack/react-table";
import styled from "styled-components";

// REMOVA O AWAIT DAQUI!
// const topics = await getTopicList(); 

// Agora exportamos uma FUNÇÃO que cria as colunas baseada nos tópicos recebidos
export const getColumns = (topics: any[]): ColumnDef<WikiPostSchema>[] => [
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
            
            // Usamos a lista 'topics' que foi passada como argumento para a função
            const topic = topics.find((e) => e.id == topic_id);

            if(topic){
                return (
                <StyledCell>
                    <StyledText>
                        {topic.name}
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
            const dateValue = row.getValue("created_date");
            if (!dateValue) return <StyledCell>-</StyledCell>;

            const dateObj = new Date(dateValue as string | Date);
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
    // Removi a coluna vazia do final pois não parecia necessária, 
    // mas pode recolocar se tiver uso.
];

const StyledCell = styled.div``;

const StyledText = styled.span` // Mudei de .text para .span (text não é tag HTML válida)
    color: var(--primary-foreground);
    font-family: var(--font-arial);
`;

const StyledLineButton = styled(WikiTitleLineButton)`
    color: var(--primary-foreground);
    font-family: var(--font-arial);
`;