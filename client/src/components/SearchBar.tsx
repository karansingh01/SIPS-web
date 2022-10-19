import { Box, Heading, Text, Stack, Container, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    

    return(
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<FaSearch color='beige' />}
                />
                <Input type='search' placeholder='What drink are you looking for?' />
            </InputGroup>
        </Stack>
    )
}