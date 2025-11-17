"use client"

import { Button } from "@/components/ui/button";
import styled from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod";
import { getPostList } from "@/services/wikiServices"
import { useForm, UseFormReturn } from "react-hook-form"
import TextInput from "@/atoms/TextInput";
import { useEffect, useState } from "react";
import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import { useRouter } from "next/navigation";

interface WikiSearchBarProps {
  placeholder: string;
  value: string;
  listSearch?: any[];
  searchForm: UseFormReturn<z.infer<any>>;
}

const WikiSearchBar = ({placeholder, value, searchForm}:WikiSearchBarProps) => {
    const [open, setOpen] = useState(false);
    const [listSearch, setListSearch] = useState<WikiPostSchema[]>([])
    const router = useRouter();
    
    const searchFilterFormSchema = z.object({
        filter: z.string(),
    });
    
    const searchFilterForm = useForm<z.infer<typeof searchFilterFormSchema>>({
        resolver: zodResolver(searchFilterFormSchema),
        defaultValues: { filter: ""}
    });

    const filterValue = searchFilterForm.watch("filter");

    useEffect(() => {
            const fetchData = async () => {
                const response = await getPostList();
                if (response) {
                    setListSearch(response);
                }
            }
            fetchData();
        } ,[filterValue]);

    const onSubmit = () => {
        console.log(searchFilterForm.getValues().filter);
        searchForm.setValue(value, filterValue);
    }

    const listExists = () => {
        if (listSearch == undefined || listSearch.length == 0 || filterValue == "") {
            return false;
        }
        return true;
    }

    return (
        <StyledContainer>
            <Form onSubmit={(onSubmit)}>
                <StyledRelativeContainer
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}>
                    <StyledFormInput
                        placeHolder={placeholder} 
                        value={filterValue} 
                        setValue={searchFilterForm.setValue}
                    />
                    {open && listExists() && (
                        <DropdownContainer>
                            {listSearch.map(row => (
                                <StyledRowContainer 
                                    onMouseDown={() => router.push(`/wiki/post/${row.id}`)}
                                    key={row.id}
                                >
                                    <h1>{row.title}</h1>
                                    <h1>{row.topic_id}</h1>
                                    <h1>{row.author_name}</h1>
                                    <h1>{new Date(row.created_date).toLocaleString()}</h1>
                                </StyledRowContainer>
                            ))}
                        </DropdownContainer>
                    )}
                </StyledRelativeContainer>
                
                <StyledButton onClick={(e) => {
                    searchForm.handleSubmit(onSubmit)(e)
                }}>Pesquisar</StyledButton>
            </Form>
        </StyledContainer>
    );
}

export default WikiSearchBar;

const StyledContainer = styled.div`
    margin-bottom:20px;
`;

const StyledRowContainer = styled.div`
    justify-content: space-evenly;
    flex-direction: row;
    display: flex;
    width: 100%;
    border: 1px solid var(--primary-foreground);
    background-color: white;
    cursor: pointer;
`;

const StyledRelativeContainer = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid var(--primary-foreground);
`;

const DropdownContainer = styled.div`
    position: absolute;
    width: 100%;
    z-index: 20;
`;

const StyledFormInput = styled(TextInput)`
    width: 100%;
    margin-right: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Label = styled.h1`
    font-family: var(--font-login-text);
    font-size: 18px;
`;

const StyledButton = styled(Button)`
    background-color: var(--primary-foreground);
    color: var(--primary);
    font-family: var(--font-login-text);
    border-radius: 5px;
`;