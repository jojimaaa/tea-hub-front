import { getTopic } from "@/services/wikiServices";
import { useEffect, useState } from "react";
import { WikiTopic } from "@/interfaces/WikiSchemas";

interface WikiNomes {
    title: string;
    author: string;
    topic_id: string;
}

function MolNomesWiki({
    title: title,
    author: author,
    topic_id: topic_id
}: WikiNomes) {
    const [data,setData] = useState<WikiTopic | undefined>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await getTopic(topic_id);
            setData(response);
        };
        fetchData();
    }, [topic_id]);

    return(
        <div>
            <h1>{title}</h1>
            <h1>{author}</h1>
            <h1>{data?.name}</h1>
        </div>    
    );
}

export default MolNomesWiki