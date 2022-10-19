import React from "react";
import { SimpleGrid, Flex } from "@chakra-ui/react";
import CocktailCard from '../components/CocktailCard';
import Header from '../components/Header';

const AllCocktailsPage = () => {
    /**
     * Veldig manuell dummydata :-DDD
     */
    let desc1 : string = "A buzzing sparkly drink";
    let drinkName1 : string = "Cranberry spritz";
    let fav1 : boolean = true;
    let img1 : string = 'https://www.liquor.com/thmb/fO-COKLw_iEA28v8K4XQjzMhkfw=/735x0/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg';

    let desc2 : string = "A calming blend";
    let drinkName2 : string = "Dark and Stormy";
    let fav2 : boolean = false;
    let img2 : string = 'https://www.liquor.com/thmb/GnTu-oC4mKRUCVztPZqDiAWw4l8=/735x0/whiskey-smash-720x720-recipe-c696cdf017494dbd981e51dca3f4402e.jpg';

    let desc3 : string = "Nomanomanom NAAAAMAMAMAMA AMAMMAMAMAMAMMAM AMAMAM";
    let drinkName3 : string = "GT babyyy";
    let fav3 : boolean = true;
    let img3 : string = 'https://assets.bonappetit.com/photos/62cdd8cedc3e934b224d8fb5/1:1/w_2560%2Cc_limit/0712-paloma-lede.jpg';
    console.log("AllCocktails");
    /**
     * Ish for henting av cocktails:
     */

    return (

        <Flex  flexDirection='column'> 
        <Header />
        <SimpleGrid transform='translate(0%, -10%)' margin={'30px'} rounded={20} columns={[1, 2, 3]} minChildWidth={'330px'} spacing={1} mt={5} backgroundColor={'#ede6df'}>
            {/*
            mapping for å hente ut alle cocktails i databasen; lagd for å hente ut cocktail direkte etter id, ikke navn, bilde osv. :

            {true || cocktails.isSuccess ? (
               <>
                  {cocktails[0] ? (
                     cocktails.map((cocktail) => <CocktailCard key={cocktail.id} cocktail={cocktail} />)
                  ) : (
                     <span>There are no recipes...</span>
                  )}s
               </>
            ) : <Text>There are no cocktails available</Text>} */}

            <CocktailCard name={drinkName1} description={desc1} favorite={fav1} image={img1}/>
            <CocktailCard name={drinkName2} description={desc2} favorite={fav2} image={img2}/>
            <CocktailCard name={drinkName3} description={desc3} favorite={fav3} image={img3}/>
            <CocktailCard name={drinkName1} description={desc1} favorite={fav1} image={img1}/>
            <CocktailCard name={drinkName2} description={desc2} favorite={fav2} image={img2}/>
            <CocktailCard name={drinkName3} description={desc3} favorite={fav3} image={img3}/>
         </SimpleGrid>

        </Flex>
    );
};

export default AllCocktailsPage;