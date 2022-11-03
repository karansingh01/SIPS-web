
describe('Home page test', () => {
    beforeEach(() => {
        cy.visit("/");});
    
      it("Check that app renders and contains header content", () => {
        cy.get("#header").should("exist");
        cy.get("#navbar").should("exist");
        cy.get("#logo").should("have.text", "SIPS");
      });

      it("Check that app navigates correctly", () => {
        cy.get("#cocktailCardsGrid > :nth-child(1)").should("exist").click();
        cy.get("#ingredientsText").should("have.text", "Ingredients");
        cy.get(".buttonCloseCocktailCard").click();
        cy.get("#ingredientsText").should("not.be", "visible");
      });
  
  
  })