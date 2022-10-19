import { Box, Heading, Text, Stack, Container, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({q, searchItems}:{q : string, searchItems : Function}) {
    
    return(
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement pointerEvents='none' children={<FaSearch color='beige' />} />
                <Input 
                    type={'search'} 
                    placeholder='What drink are you looking for?'
                    color={'beige'}
                    value = {q}
                    onChange={(e) => searchItems(e.target.value)/*(e) => searchItems(e.target.value)*/}
                    />    
            </InputGroup>
        </Stack>
    )
}