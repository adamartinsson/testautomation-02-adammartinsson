/// <reference types="cypress" />

import * as targets from '../targets/targets'

const clientMenu = ':nth-child(3) > .action'
const deleteButton = '.menu > :nth-child(2)'
const createClientButtonText = 'Create Client'
const clientBox = '.client'

//clicks the big shiny "create client"-button

function clickCreateClient(){
    cy.contains(createClientButtonText).click()
}

//clicks the big shiny red client "delete"-button

function deleteClient(){
    cy.get(clientMenu).click()
    cy.get(deleteButton).click()
}

//verifies page elements of new client match input

function verifyClient(){
    cy.get(clientBox).last()
        .should('contain', targets.sampleName)
        .and('contain', targets.sampleEmail)
        .and('contain', targets.samplePhone)
}

module.exports = {
    clickCreateClient,
    deleteClient,
    verifyClient
}