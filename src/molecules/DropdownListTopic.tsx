"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { WikiTopicSchema } from "@/interfaces/WikiSchemas";
import z from "zod";
import { UseFormReturn } from "react-hook-form";

interface DropdownListTopicProps {
  Items: WikiTopicSchema[];
  searchForm: UseFormReturn<z.infer<any>>;
}

export function DropdownListTopic({Items, searchForm}: DropdownListTopicProps) {
  const [position, setPosition] = React.useState("Todos");
  
  React.useEffect(() => {
    searchForm.setValue("topic", position);
  } ,[position]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filtrar</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Tópicos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Todos">Todos</DropdownMenuRadioItem>
          {Items.map((item, index) => (
            <DropdownMenuRadioItem value={item.id} key={index}>{item.name}</DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
