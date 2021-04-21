/// <reference types="Cypress" />


describe('initial test', () => {
    it('Verifies that the site is up and running', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Tester Hotel')
    })
})