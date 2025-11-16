import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import styled from "styled-components";

export const StyledIconButton = styled(Button)`
    &:hover {
        cursor: pointer;
    }
    color: ${props => (props.color) || "var(--primary-foreground)"}
`;

export const StyledSmallButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-content: center;
    width: 100%;
    gap: 6px;
`;

export const StyledMediumButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-content: center;
    width: 100%;
    gap: 40px;
`;

export const StyledErrorLabel = styled(Label)`
    color: var(--error-primary);
    font-family: var(--font-montserrat)
`;