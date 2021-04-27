/// <reference types="cypress" />

const backButtonText = 'Back'
const createRoomText = 'Create Room'
const mainTitle = 'Tester Hotel'
const subTitle = 'Rooms'
const greetingsMessage = 'Welcome tester01!'

function clickCreateRoom(){
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.contains(greetingsMessage)
    cy.contains(backButtonText)
    cy.contains(createRoomText).click()
}

function deleteRoom(){
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.get(':nth-child(3) > .action').click()
    cy.get('.menu > :nth-child(2)').click()
}

function verifyRoom(){
    cy.get('.room').last().should('contain', 'Floor 1, Room 1').and('contain', 'twin').and('contain', 'balcony').and('contain', 'ensuite').and('contain', 'sea view').and('contain', 'penthouse')
}



module.exports = {
    clickCreateRoom,
    verifyRoom,
    deleteRoom
}