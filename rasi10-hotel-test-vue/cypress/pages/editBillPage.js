/// <reference types="cypress" />

const subHeader = 'h2'
const subTitle = 'Bill: 1'
const deleteButtonText = 'Delete'
const valueInput = ':nth-child(3) > input'
const saveButton = '.blue'
const backButtonText = 'Back'

function editBill(newValue){
    cy.get(subHeader).contains(subTitle)
    cy.contains(backButtonText)
    cy.contains(deleteButtonText)
    cy.get(valueInput).clear().type(newValue)
    cy.get(saveButton).click()
}


module.exports = {
    editBill
}