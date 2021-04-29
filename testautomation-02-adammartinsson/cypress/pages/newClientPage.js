/// <reference types="cypress" />

const name_input = ':nth-child(1) > input'
const email_input = ':nth-child(2) > input'
const phone_input = ':nth-child(3) > input'
const save_button = '.blue'

//creates new client

function newClient(name, email, telephone){
    cy.get(name_input).type(name)
    cy.get(email_input).type(email)
    cy.get(phone_input).type(telephone)
    cy.get(save_button).click()
}

module.exports = {
    newClient
}
