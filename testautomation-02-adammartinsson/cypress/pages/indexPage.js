/// <reference types="Cypress" />

const subTitle = 'Tester Hotel Overview'
const subHeader = 'h2'

//logout consts
const loggedInMessage = 'Welcome tester01'
const logOutButton = '.user > .btn'

//room consts
const roomsTitle = 'Rooms'
const roomsHeader = ':nth-child(1) > h4'
const roomsViewButton = '.blocks > :nth-child(1) > .btn'

//client consts
const clientsTitle = 'Clients'
const clientsHeader = ':nth-child(2) > h4'
const clientsViewButton = '.blocks > :nth-child(2) > .btn'

//bills consts
const billsTitle = 'Bills'
const billsHeader = ':nth-child(3) > h4'
const billsViewButton = '.blocks > :nth-child(3) > .btn'

//reservations consts
const reservationsTitle = 'Reservations'
const reservationsHeader = ':nth-child(4) > h4'
const reservationsViewButton = '.blocks > :nth-child(4) > .btn'



function logout() {
    
    cy.get('body').then(($body) => {
        if ($body.text().includes(loggedInMessage)) {
            cy.get(logOutButton).click()
        }
    
})
}

function viewRooms() {
    
    cy.get(subHeader).contains(subTitle)
    cy.get(roomsHeader).contains(roomsTitle)
    cy.get(roomsViewButton).click()

}

function viewClients() {
    
    cy.get(subHeader).contains(subTitle)
    cy.get(clientsHeader).contains(clientsTitle)
    cy.get(clientsViewButton).click()

}

function viewBills() {
    
    cy.get(subHeader).contains(subTitle)
    cy.get(billsHeader).contains(billsTitle)
    cy.get(billsViewButton).click()
    
}

function viewReservations() {
    
    cy.get(subHeader).contains(subTitle)
    cy.get(reservationsHeader).contains(reservationsTitle)
    cy.get(reservationsViewButton).click()

}


module.exports = {
    logout,
    viewRooms,
    viewClients,
    viewBills,
    viewReservations,
}

