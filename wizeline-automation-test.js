/// <reference types="cypress" />

describe('should be able to have a granted log in', () =>{

    it('log in in testapp.galenframework', () => {
    cy.visit('http://testapp.galenframework.com/');
    cy.url().should('include', 'http://testapp.galenframework.com/');
    cy.get('button.btn-lg').click();
    cy.get('input[name="login.username"]').type('testuser@example.com');
    cy.get('input[name="login.password"]').type('test123');
    cy.get('button.button-login').click();
    cy.get('div#my-notes-page h2').should('have.text', 'My Notes');


    }) 

    it.only('log in in testapp.galenframework failed', () => {
        cy.visit('http://testapp.galenframework.com/');
        cy.url().should('include', 'http://testapp.galenframework.com/');
        cy.get('button.btn-lg').click();
        cy.get('input[name="login.username"]').type('test@test.com');
        cy.get('input[name="login.password"]').type('test1234');
        cy.get('button.button-login').click();
        cy.get('div#login-error-message')
        .should('have.text', 'The username or password are incorrect');
})
})

    
