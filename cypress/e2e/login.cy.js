describe('Login page test', () => {
    beforeEach(() => {
        cy.visit("/login");
      });
    
      it("Check that app renders and contains header content", () => {
        cy.get("#loginPage").should("exist");
        cy.get("#loginHeader").should("have.text", "Login to your account");
        
      });

      it("Inputs value to email field", () => {
        cy.get('input[name="email"]').click();
        cy.get('input[name="email"]').type("test@test.com");
        cy.get('input[name="email"]').should("have.value", "test@test.com");

      });
  
  
  })