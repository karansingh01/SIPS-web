import React from "react";
import { SimpleGrid, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import CocktailCard from '../components/CocktailCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from "react";

const AllCocktailsPage = () => {
    /**
     * Veldig manuell dummydata :-DDD
     */
    const dummyCocktails = [
      { 
         id : 1,
         name: "Cranberry spritz",
         description: "A buzzing sparkly drink",
         favorite: true,
         image: 'https://www.liquor.com/thmb/fO-COKLw_iEA28v8K4XQjzMhkfw=/735x0/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg',
      }, 
      { 
         id : 2,
         name: "Dark and Stormy",
         description: "A calming blend",
         favorite: false,
         image: 'https://www.liquor.com/thmb/GnTu-oC4mKRUCVztPZqDiAWw4l8=/735x0/whiskey-smash-720x720-recipe-c696cdf017494dbd981e51dca3f4402e.jpg',
      }, 
      { 
         id : 3,
         name: "GT babyyy",
         description: "Nomanomanom NAAAAMAMAMAMA AMAMMAMAMAMAMMAM AMAMAM",
         favorite: true,
         image: 'https://assets.bonappetit.com/photos/62cdd8cedc3e934b224d8fb5/1:1/w_2560%2Cc_limit/0712-paloma-lede.jpg',
      },
      { 
         id : 4,
         name: "Negroni",
         description: "yumyum",
         favorite: true,
         image: 'https://www.thespruceeats.com/thmb/P2AAhIxjfFwXWGIjhZfhwCVcp94=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/negroni-cocktail-recipe-759327-hero-01-3e157f628ade43f1969793447c5ff51d.jpg',
      },
      { 
         id : 5,
         name: "Aperol Spritz",
         description: "Goood sommer!",
         favorite: false,
         image: 'https://www.theendlessmeal.com/wp-content/uploads/2022/07/aperol-spritz-recipe-2.jpg',
      }, 
    ]


      /* For søk. Denne funker ikke helt atm */
      const [query, setQuery] = useState('')
      const [cocktails, setCocktails] = useState(dummyCocktails);
      const [filteredResults, setFilteredResults] = useState(dummyCocktails);

       const searchItems = (searchValue : string) => {
         setQuery(searchValue);
         console.log(searchValue);
         if (query !== ''){
         const filteredData = cocktails.filter((cocktail) => {
            return Object.values(cocktail).join('').toLowerCase().includes(query.toLowerCase())
        })
         setFilteredResults(filteredData)
        } else {
         setFilteredResults(cocktails)
        }
       };
      


    return (

        <Flex  flexDirection='column'> 
        <Header />
        <Grid transform='translate(0%, -15%)' margin={'30px'} rounded={20} templateRows='repeat(1fr)' templateColumns='repeat(1fr)' gap={4} mt={5} /* backgroundColor={'#ede6df'} */>
        <GridItem colSpan={4}>
            <SearchBar q={query} searchItems={searchItems}/>
        </GridItem>
        <GridItem colSpan={4}>
        <SimpleGrid columns={[1, 2, 3]} minChildWidth={'330px'} spacing={1} backgroundColor={'#ede6df'} rounded={20} >
            {filteredResults.length > 0 ? (
               <>
                  {filteredResults[0] ? (
                     filteredResults.map((cocktail) => <CocktailCard key={cocktail.id} cocktail={cocktail} />)
                  ) : (
                     <Text>There are no cocktails available</Text>
                  )}
               </>
            ) : <Text>There are no cocktails available</Text>}
         </SimpleGrid>
         </GridItem>
         </Grid>
        </Flex>
    );
};

export default AllCocktailsPage;