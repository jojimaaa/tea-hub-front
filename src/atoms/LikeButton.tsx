import { Heart } from "lucide-react";
import styled from "styled-components";
import { StyledIconButton } from "./StyledAtoms";
import { MouseEventHandler } from "react";

export interface LikeButtonProps {
    likedByMe: boolean,
    likeCount: number,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string
}

const LikeButton = ({likedByMe, likeCount, disabled=false, onClick} : LikeButtonProps) => {
    return <StyledContainer>
        {likedByMe ? <StyledIconButton color={"var(--liked)"} disabled={disabled} onClick={onClick} aria-label="Like" size={"icon"}><Heart/></StyledIconButton> : 
                                                <StyledIconButton aria-label="Like" size={"icon"}><Heart/></StyledIconButton>}
        {likeCount}
    </StyledContainer>
}

export default LikeButton;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;