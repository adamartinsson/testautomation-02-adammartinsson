/// <reference types="cypress" />

const backButtonText = 'Back'
const createRoomText = 'Create Room'
const subHeader = 'h2'
const subTitle = 'Rooms'
const ellipsesMenu = ':nth-child(3) > .action'
const ellipsesMenuDelete = '.menu > :nth-child(2)'
const roomBox = '.room'

function clickCreateRoom(){
    cy.get(subHeader).contains(subTitle)
    cy.contains(backButtonText)
    cy.contains(createRoomText).click()
}

function deleteRoom(){
    cy.get(subHeader).contains(subTitle)
    cy.contains(backButtonText)
    cy.get(ellipsesMenu).click()
    cy.get(ellipsesMenuDelete).click()
}

function verifyRoom(category, number, floor, price, features){
    cy.get(roomBox).last()
    .should('contain', category)
    .and('contain', number)
    .and('contain', floor)
    .and('contain', price)
    .and('contain', features)
}

module.exports = {
    clickCreateRoom,
    verifyRoom,
    deleteRoom
}