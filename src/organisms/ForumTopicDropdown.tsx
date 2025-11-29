"use client"

import { PrimaryBaseButton } from "@/atoms/StyledAtoms";
import { useAsync } from "@/hooks/useAsync";
import { getForumTopics } from "@/services/forumServices";
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import styled from "styled-components";

interface ForumTopicDropdownProps {
    className?: string,
    value: string,
    setValue: UseFormSetValue<any>
}

const ForumTopicDropdown = ({
    className,
    value,
    setValue
} : ForumTopicDropdownProps) => {
    const [position, setPosition] = useState("");

    const {loading, error, value : topics} = useAsync(getForumTopics);

    return (
        <div className={className}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <PrimaryBaseButton>{position != "" ? topics?.find(topic => topic.id == position)?.name : "Tópico"}<ChevronDown/></PrimaryBaseButton>
                </DropdownMenuTrigger>
                {!!!loading && <StyledMenuContent>
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <StyledRadioItem value="" onSelect={()=> setValue(value, undefined)}>Todos</StyledRadioItem>
                        {topics && topics.map(topic => {
                            return(<StyledRadioItem 
                                        value={topic.id} 
                                        onSelect={() => setValue(value, topic.id)}
                                    >
                                        {topic.name}
                                    </StyledRadioItem>)
                        })}
                    </DropdownMenuRadioGroup>
                </StyledMenuContent>}
            </DropdownMenu>
        </div>
    );
}

export default ForumTopicDropdown;

const StyledMenuContent = styled(DropdownMenuContent)`
    background-color: var(--primary-foreground);
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--secondary);
    color: var(--primary);
    padding-block: 5px;
    padding-inline: 3px;
    z-index: 9999;
`;

const StyledRadioItem = styled(DropdownMenuRadioItem)`
    border-radius: 3px;
    padding: 3px;
    &:hover{
        cursor: pointer;
        background-color: var(--secondary);
        outline: none;
    }
    margin-block: 6px;
`;