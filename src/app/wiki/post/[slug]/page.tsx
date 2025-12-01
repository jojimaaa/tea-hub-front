"use client"
import MolNomesWiki from '@/molecules/MolNomesWiki';
import * as Rct from 'react';
import {getPost} from '@/services/wikiServices';
import { WikiPostSchema} from '@/interfaces/WikiSchemas';
import MarkdownRenderer from '@/molecules/MarkdownRenderer';
import styled from 'styled-components';

interface WikiParams {
    params : Promise<{
        slug : string
    }>
}


export default function WikiPostPage({params} : WikiParams) {
    const {slug} = Rct.use(params);
    const [data,setData] = Rct.useState<WikiPostSchema | null>();
    Rct.useEffect(() => {
        const fetchData = async () => {
            const response = await getPost(slug);
            setData(response);
        };
        fetchData();
    }, [slug]);

    if(data == null) return(<div><h1>T-T</h1></div>)
    return (
        <div>
            <MolNomesWiki 
                title={data.title}
                author={data.author_name}
                topic_id={data.topic.id}
            />
            <StyledContainer>
                <MarkdownRenderer
                markdownContent={data.body}
            />
            </StyledContainer>
            
        </div>
    );
}

const StyledContainer = styled.div`

    border:1px solid black;

`;