/// <reference types="cypress" />

const pageTitle = 'Testers Hotel'
const subHeader = 'h2'
const subTitle = 'Login'
const usernameField = ':nth-child(1) > input'
const passwordField = ':nth-child(2) > input'
const loginButtonText = 'Login'
const loginButton = '.btn'

//checks title of each page, not limited to loginfunctions only
function checkTitle(cy) {
    cy.title().should('eq', pageTitle)
}

function testFullLogin(cy, username, password, verify) {
    cy.get(subHeader).contains(subTitle)
    cy.get(loginButton).contains(loginButtonText)
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(loginButton).click()
    cy.contains(verify) 
} 

function testFailLogin(cy, username, password, verify){
    cy.get(subHeader).contains(subTitle)
    cy.get(loginButton).contains(loginButtonText)
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(loginButton).click()
    cy.contains(verify)
}

module.exports = {
    checkTitle,
    testFullLogin,
    testFailLogin
}