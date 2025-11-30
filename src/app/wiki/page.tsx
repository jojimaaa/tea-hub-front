"use client"
import { StyledPageContainer } from "@/atoms/StyledAtoms";
import TitleLabel from "@/atoms/TitleLabel";
import WikiHomeButtonsBar from "@/organisms/WikiHomeButtonsBar";
import WikiRecentList from "@/organisms/WikiRecentList";
import WikiRecomList from "@/organisms/WikiRecomList";

export default function HomeWiki() {

    return (<StyledPageContainer> 
        <TitleLabel
            title={"Wiki TEA-HUB"}
        />
        <WikiRecomList/>
        <WikiRecentList/>
        <WikiHomeButtonsBar/>
    </StyledPageContainer>);
}

