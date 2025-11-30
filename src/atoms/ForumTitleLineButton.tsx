import { useRouter } from "next/navigation";
import styled from "styled-components";

interface ForumTitleLineButtonProps{
    title:string;
    className?:string;
    slug: string
}

function ForumTitleLineButton({title: title, className, slug}:ForumTitleLineButtonProps) {
    const router = useRouter();

    return (
        <Button className={className} onClick={() => router.push(`/forum/post/${slug}`)}>{title}</Button>
        // <Button className={classNameBt} onClick={onClick}>
        //     <Label className={classNameTxt}>{Nome}</Label>
        // </Button>
    );
}
export default ForumTitleLineButton;


const Button = styled.button`
    height: 50%;
    cursor: pointer;
    font-family: var(--font-montserrat);
    font-size: 15px;
    height: 100%;
    &:hover {
        text-decoration: underline;
    }
`;