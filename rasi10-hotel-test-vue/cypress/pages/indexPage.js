/// <reference types="Cypress" />

const mainTitle = 'Tester Hotel'
const subTitle = 'Tester Hotel Overview'
const viewButtonText = 'View'

//room consts
const roomTitle = 'Rooms'
const roomNumber = 'Number: 2'
const roomViewButton = ':nth-child(1) > .btn'

//client consts
const clientsTitle = 'Clients'
const clientNumber = 'Number: 2'
const clientViewButton = '.blocks > :nth-child(2) > .btn'

//bills consts
const billsTitle = 'Bills'
const billsTotalNumber = 'Total: 1 (4500kr)'
const billsTotalPaid = 'Paid: 0 (0kr)'
const billsViewButton = '.blocks > :nth-child(3) > .btn'

//reservations consts
const reservationsTitle = 'Reservations'
const reservationsTotal = 'Total: 1'
const reservationsCurrent = 'Current: 0'
const reservationsViewButton = '.blocks > :nth-child(4) > .btn'


function logout() {
    
    cy.get('body').then(($body) => {
        if ($body.text().includes('Welcome tester01')) {
            cy.get('.user > .btn').click()
        }
    
})
}

function viewRooms() {
    
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.get(':nth-child(1) > h4').contains(roomTitle)
    cy.get('.blocks > :nth-child(1) > div').contains(roomNumber)
    cy.get(':nth-child(1) > .btn').contains(viewButtonText)
    cy.get(roomViewButton).click()

}

function viewRooms(){
    cy.get('h1').contains(mainTitle)
    cy.get(roomViewButton).click()
}

function viewClients() {
    
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.get(':nth-child(2) > h4').contains(clientsTitle)
    cy.get('.blocks > :nth-child(2) > div').contains(clientNumber)
    cy.get(':nth-child(2) > .btn').contains(viewButtonText)
    cy.get(clientViewButton).click()

}

function viewBills() {
    
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.get(':nth-child(3) > h4').contains(billsTitle)
    cy.get(':nth-child(3) > :nth-child(2)').contains(billsTotalNumber)
    cy.get(':nth-child(3) > :nth-child(3)').contains(billsTotalPaid)
    cy.get(':nth-child(3) > .btn').contains(viewButtonText)
    cy.get(billsViewButton).click()
    

}

function viewReservations() {
    
    cy.get('h1').contains(mainTitle)
    cy.get('h2').contains(subTitle)
    cy.get(':nth-child(4) > h4').contains(reservationsTitle)
    cy.get(':nth-child(4) > :nth-child(2)').contains(reservationsTotal)
    cy.get(':nth-child(4) > :nth-child(3)').contains(reservationsCurrent)
    cy.get(':nth-child(4) > .btn').contains(viewButtonText)
    cy.get(reservationsViewButton).click()

}



module.exports = {
    logout,
    viewRooms,
    viewClients,
    viewBills,
    viewReservations,
}

