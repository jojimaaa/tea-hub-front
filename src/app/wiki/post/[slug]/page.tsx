"use client"
import MolNomesWiki from '@/molecules/MolNomesWiki';
import * as Rct from 'react';
import {getPost} from '@/services/wikiServices';
import { WikiPostSchema} from '@/interfaces/WikiSchemas';

interface WikiParams {
    params : Promise<{
        slug : string
    }>
}


export default function WikiPostPage({params} : WikiParams) {
    const {slug} = Rct.use(params);
    const [data,setData] = Rct.useState<WikiPostSchema | undefined>();
    Rct.useEffect(() => {
        const fetchData = async () => {
            const response = await getPost(slug);
            setData(response);
        };
        fetchData();
    }, [slug]);

    if(data == undefined) return(<div><h1>T-T</h1></div>)
    return (
        <div>
            <MolNomesWiki 
                title={data.title}
                author={data.author_name}
                topic_id={data.topic.id}
            />
            <h1>{JSON.stringify(data.body)}</h1>
        </div>
    );
}