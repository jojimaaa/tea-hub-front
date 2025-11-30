"use client"

import { PrimaryBaseButton } from "@/atoms/StyledAtoms";
import useForumTopics from "@/hooks/useForumTopics";
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
    enableNoSelection? : boolean,
    defaultTopicId? : string,
    className?: string,
    value: string,
    setValue: UseFormSetValue<any>
}

const ForumTopicDropdown = ({
    enableNoSelection = true,
    defaultTopicId = "",
    className,
    value,
    setValue
} : ForumTopicDropdownProps) => {
    const [position, setPosition] = useState(defaultTopicId);

    const {loading, topics} = useForumTopics();

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <PrimaryBaseButton className={className}>{position != "" ? topics?.find(topic => topic.id.toString() == position)?.name : "Tópico"}<ChevronDown/></PrimaryBaseButton>
                </DropdownMenuTrigger>
                {!!!loading && <StyledMenuContent>
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        {enableNoSelection && <StyledRadioItem value="" onSelect={()=> setValue(value, undefined)}>Todos</StyledRadioItem>}
                        {topics && topics.map(topic => {
                            return(<StyledRadioItem 
                                        key={topic.id}
                                        value={topic.id.toString()} 
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
    margin-block: 5px;
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