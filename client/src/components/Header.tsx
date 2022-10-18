import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Textarea,
    Stack,
    Image
  } from '@chakra-ui/react';

export default function Header(){

    const IMAGE = 'https://www.aperitif.no/storage/image/core_files/2022/9/26/089084ad5366ce9f420b92dc3ad13d61/jpg/aperitif/grid_news_large_type3/Tanqueray%20Sevilla%20Negroni.jpg';
    
    return(
        <Center py={12}>
            <Box
                backgroundImage={IMAGE}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                />
            <Text> halla </Text> 
        </Center>

    )
}