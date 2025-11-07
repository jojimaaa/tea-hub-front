"use client"

import styled from "styled-components";

export default function WikiLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderContainer>{children}</HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.div`
    /* border-width: 1px;
    border-color: var(--color-zinc-800); */
    margin-inline: calc(var(--spacing) * 6);
    margin-top: calc(var(--spacing) * 2);
    border-radius: var(--radius-md);
    padding: calc(var(--spacing) * 2);
`;