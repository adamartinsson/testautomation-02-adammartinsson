/// <reference types="cypress" />

import * as targets from '../targets/targets'

const clientMenu = ':nth-child(3) > .action'
const deleteButton = '.menu > :nth-child(2)'

function clickCreateClient(){
    cy.contains('Create Client').click()
}

function deleteClient(){
    cy.get(clientMenu).click()
    cy.get(deleteButton).click()
}

function verifyClient(){
    cy.get('.client').last().should('contain', targets.sampleName).and('contain', targets.sampleEmail).and('contain', targets.samplePhone)
}

module.exports = {
    clickCreateClient,
    deleteClient,
    verifyClient
}