"use client"

import styled from 'styled-components';
import '../app/globals.css'
import { useRouter } from 'next/navigation';

interface WikiTitleLineButtonProps{
    title:string;
    className?:string;
    slug: string
}

function WikiTitleLineButton({title: title, className, slug}:WikiTitleLineButtonProps) {
    const router = useRouter();

    return (
        <Button className={className} onClick={() => router.push(`/wiki/post/${slug}`)}>{title}</Button>
        // <Button className={classNameBt} onClick={onClick}>
        //     <Label className={classNameTxt}>{Nome}</Label>
        // </Button>
    );
}

export default WikiTitleLineButton;

const Button = styled.text`
    height: 50%;
    cursor: pointer;
    font-family: var(--font-montserrat);
    font-size: 15px;
    height: 100%;
    &:hover {
        text-decoration: underline;
    }
`;

// const Button = styled.button`
//     width: 140px;
//     height: 50%;
//     cursor: pointer;
// `;

// const Label = styled.h1`
//     font-family: var(--font-montserrat);
//     font-size: 15px;
//     height: 100%;
//     &:hover {
//         text-decoration: underline;
//     }
// `;