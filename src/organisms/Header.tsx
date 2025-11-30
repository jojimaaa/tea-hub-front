"use client"
import LineButton from "@/atoms/LineButton";
import useAuth from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

const Header = () => {
    const router = useRouter();
    const {auth, logout} = useAuth();
    const pathname = usePathname();

    return (
        <HeaderRow>
            <LogoButton
                onClick={() => router.push("/")}
            >
                TEA-HUB
            </LogoButton>
            <LineButton
                Nome="Wiki"
                onClick={() => router.push("/wiki")}
            />
            <LineButton
                Nome="Forum"
                onClick={() => router.push("/forum")}
            />
            {auth.username ? <LineButton
                        Nome="Logout"
                        onClick={() => {
                            logout();
                            router.refresh();
                        }}
                    /> : 
                    <LineButton
                        Nome="Login"
                        onClick={() => router.push(`/login?from=${pathname}`)}
                    />
            }
        </HeaderRow>

    );
}

export default Header;

const HeaderRow = styled.div`
    background-color: var(--primary);
    padding-top: 10px;
    padding-bottom: 5px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border-width: 0px 0px 1px 0px;
    border-color: var(--primary-foreground)
`;

const LogoButton = styled.button`
    font-size: 19px;
    &:hover{ 
        cursor: pointer;
    }
    font-family: var(--font-tea-hub);
`;