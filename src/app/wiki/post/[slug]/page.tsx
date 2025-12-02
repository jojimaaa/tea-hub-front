"use client"
import MolNomesWiki from '@/molecules/MolNomesWiki';
import * as Rct from 'react';
import {getPost} from '@/services/wikiServices';
import { WikiPostSchema} from '@/interfaces/WikiSchemas';
import styled from 'styled-components';
import { StyledMarkdownBody } from '@/atoms/StyledAtoms';
import Image from "next/image";
import LoadingSpinner from '@/organisms/LoadingSpinner';

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

    if(data == null) return(<div><LoadingSpinner label="Carregando" text="Por favor, aguarde."/></div>)
    return (
        <StyledContainer>
            <StyledTextos>
                <MolNomesWiki 
                title={data.title}
                author={data.author_name}
                topic_name={data.topic.name}
                date = {data.created_date.toString().split("T")[0]}
            />

                <StyledContainerMarkdown>
                
                    <StyledMarkdownBody
                        markdownContent={data.body}
                    />
                <StyledContainerImg>
                    <Image fill src={data.image_url} alt=""/>
                </StyledContainerImg>
                </StyledContainerMarkdown>

            </StyledTextos>
            
            
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    display:flex;
    flex-direction: column;
    /* background-color: aliceblue; */
`;

const StyledContainerImg = styled.div`
    justify-content: center;
    align-items: center;
    width: 40%;
    display:flex;
    flex-direction: column;
    position: relative;
    height: 200px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
    float: inline-end;
`;

const StyledImage = styled(Image)`
    float: right;
`;


const StyledTextos = styled.div`
    justify-content: center;
    align-items: center;
    width: 80%;
    display:flex;
    flex-direction: column;

`;

const StyledContainerMarkdown = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

`;