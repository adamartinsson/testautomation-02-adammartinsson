/// <reference types="cypress" />
//should probably move all default/non-login items to a separate page (like pagetitle, checktitle func)

const pageTitle = 'Testers Hotel'
const subTitle = 'Login'
const usernameField = ':nth-child(1) > input'
const passwordField = ':nth-child(2) > input'
const loginButtonText = 'Login'
const loginButton = '.btn'
const logOutButton = 'Logout'

//checks title of each page, not limited to loginfunctions only
function checkTitle(cy) {
    cy.title().should('eq', pageTitle)
}

function testFullLogin(cy, username, password, verify) {
    cy.get('h2').contains(subTitle)
    cy.get('button').contains(loginButtonText)
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(loginButton).click()
    cy.contains(verify) 
} 

function testFailLogin(cy, username, password, verify){
    cy.get('h2').contains(subTitle)
    cy.get('button').contains(loginButtonText)
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(loginButton).click()
    cy.contains(verify)
}

function logout() {
    
        cy.get('body').then(($body) => {
            if ($body.text().includes('Welcome tester01')) {
                cy.get('.user > .btn').click()
            }
        
    })
}

module.exports = {
    checkTitle,
    testFullLogin,
    testFailLogin,
    logout
}