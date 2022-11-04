import { gql } from "@apollo/client";


const GET_ALL_DRINKS = gql`
query GetAllDrinks {
  getAllDrinks {
    idDrink
    strDrink
    strDrinkThumb
    strInstructions
    strGlass
    strIngredient1
    strIngredient2
    strIngredient3
    strIngredient4
    strIngredient5
    strIngredient6
    strIngredient7
    strIngredient8
    strIngredient9
    strIngredient10
    strMeasure1
    strMeasure2
    strMeasure3
    strMeasure4
    strMeasure5
    strMeasure6
    strMeasure7
    strMeasure8
    strMeasure9
    strMeasure10
  }
}
`;

export const testDrink: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strInstructions: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
  }  = 
    {
      idDrink: "1",
      strDrink: "Drink",
      strDrinkThumb: "test",
      strGlass: "test",
      strIngredient1: "test",
      strIngredient2: "test",
      strIngredient3: "test",
      strIngredient4: "test",
      strIngredient5: "test",
      strIngredient6: "test",
      strIngredient7: "test",
      strIngredient8: "test",
      strIngredient9: "test",
      strIngredient10: "test",
      strInstructions: "test",
      strMeasure1: "test",
      strMeasure2: "test",
      strMeasure3: "test",
      strMeasure4: "test",
      strMeasure5: "test",
      strMeasure6: "test",
      strMeasure7: "test",
      strMeasure8: "test",
      strMeasure9: "test",
      strMeasure10: "test",
    }
  