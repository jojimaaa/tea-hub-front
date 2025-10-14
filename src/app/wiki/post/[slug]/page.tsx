"use client"
import * as Rct from 'react';

interface WikiParams {
    params : Promise<{
        slug : string
    }>
}

export default function WikiPost({params} : WikiParams) {
    const {slug} = Rct.use(params);
    // const slug = params.slug;

    if(!params) return <>NOT FOUND!</>
    return (<>
        <div>
            {slug}
        </div>
    </>);
}