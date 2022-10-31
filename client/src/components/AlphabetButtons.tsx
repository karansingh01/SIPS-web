import {
    Box,
    Stack,
    Button,
    WrapItem,
    Wrap,
    ButtonGroup
  } from "@chakra-ui/react";


const AlphabetButtons = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return (
        <Wrap spacing="5px" margin="4" justify="center">
            {alphabet.map((letter) => (
                <WrapItem key={letter}>
                    <Button
                        colorScheme="black"
                        variant="outline"
                        size="sm"
                        borderRadius="full"
                        fontSize="10px"
                        _hover={{ bg: '#ebedf0' }}
                        cursor = "click"
                    >
                        {letter}
                    </Button>
                </WrapItem>
            ))}
            </Wrap>
    )};

export default AlphabetButtons;