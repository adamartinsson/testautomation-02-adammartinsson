/// <reference types="Cypress" />

const mainTitle = 'Tester Hotel'
const subTitle = 'Tester Hotel Overview'
const backButtonText = 'Back'
const createRoomText = 'Create Room'

//Testing values
const num1 = '1'
const num500 = '500'

//New Room page
const newRoomTitle = 'New Room'



//room consts
const roomTitle = 'Rooms'
const roomAmount = '.blocks > :nth-child(1) > div'
const roomViewButton = ':nth-child(1) > .btn'
const roomViewButtontext = 'View'
//client consts
const clientsTitle = 'Clients'
const clientsAmount = '.blocks > :nth-child(2) > div'
const clientsViewButton = '.blocks > :nth-child(2) > .btn'
const clientsViewButtonText = 'View'
//bills consts
const billsTitle = 'Bills'
const billsTotal = ':nth-child(3) > :nth-child(2)'
const billsPaid = ':nth-child(3) > :nth-child(3)'
const billsViewButton = ':nth-child(3) > .btn'
const billsViewText = 'View'
//reservations consts
const reservTitle = 'Reservations'
const reservTotal = ':nth-child(4) > :nth-child(2)'
const reservCurrent = ':nth-child(4) > :nth-child(3)'
const reservViewButton = ':nth-child(4) > .btn'
const reservViewText = 'View'

function createRoom() {
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.get(':nth-child(1) > h4').contains(roomTitle)
    cy.get(':nth-child(1) > .btn').contains(roomViewButtontext)
    //should probably learn how to store variable in order to compare # of rooms here
    cy.get(roomViewButton).click()
    cy.url().should('eq', 'http://localhost:3000/rooms')
    cy.contains(backButtonText)
    cy.get('h2 > .btn').contains(createRoomText)
    cy.get('h2 > .btn').click()
    cy.url().should('eq', 'http://localhost:3000/room/new')
    cy.get('h2 > div').contains(newRoomTitle)
    cy.get(':nth-child(1) > select').select('Double')
    cy.get(':nth-child(1) > select').select('Single')
    cy.get(':nth-child(1) > select').select('Twin')
    //use const input data here instead?
    cy.get(':nth-child(2) > input').type(num1)
    cy.get(':nth-child(3) > input').type(num1)
    cy.get('.checkbox').click()
    cy.get(':nth-child(5) > input').type(num500)
    cy.get(':nth-child(6) > select').select([value="balcony", "ensuite", "sea_view", "penthouse"])
    cy.get('.blue').click()
    cy.get(':nth-child(1) > :nth-child(2) > h3').contains('Floor 1, Room 1')
    cy.get(':nth-child(1) > :nth-child(2) > .category').contains('twin')
    cy.get(':nth-child(1) > :nth-child(2) > .available').contains('Available: true')
    cy.get(':nth-child(1) > :nth-child(2) > .price').contains('Price: 500kr')

}

function deleteRoom(){
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.get(':nth-child(1) > h4').contains(roomTitle)
    cy.get(':nth-child(1) > .btn').contains(roomViewButtontext)
    cy.get(roomViewButton).click()
    cy.url().should('eq', 'http://localhost:3000/rooms')
    cy.get(':nth-child(1) > .action').click()
    cy.get('.menu > :nth-child(2)').click()
}

function deleteAllRooms(){
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.get(':nth-child(1) > h4').contains(roomTitle)
    cy.get(':nth-child(1) > .btn').contains(roomViewButtontext)
    cy.get(roomViewButton).click()
    cy.url().should('eq', 'http://localhost:3000/rooms')
    cy.get(':nth-child(1) > .action').click()
    cy.get('.menu > :nth-child(2)').click()
    cy.get(':nth-child(1) > .action').click()
    cy.get('.menu > :nth-child(2)').click()
    cy.get(':nth-child(1) > .action').click()
    cy.get('.menu > :nth-child(2)').click()
    cy.get(':nth-child(1) > .action').click()
    cy.get('.menu > :nth-child(2)').click()
    cy.get(':nth-child(1) > .action').click()
    cy.get('.menu > :nth-child(2)').click()
}

module.exports = {
    createRoom,
    deleteRoom,
    deleteAllRooms
}

