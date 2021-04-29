/// <reference types="cypress" />

const subHeader = 'h2'
const subTitle = 'Bills'
const ellipsesMenu = ':nth-child(1) > .action'
const ellipsesMenuEdit = '.menu > :nth-child(1)'
const backButtonText = 'Back'
const billsBox = '.bill'
const firstBill = 'ID: 1'

//opens menu to edit first bill in list

function clickEditBill(){
    cy.get(subHeader).contains(subTitle)
    cy.contains(backButtonText)
    cy.get(billsBox).contains(firstBill)
    cy.get(ellipsesMenu).click()
    cy.get(ellipsesMenuEdit).click()
}

//verifies elements of first bill in list

function verifyEditedBill(newValue){
    cy.get(subHeader).contains(subTitle)
    cy.contains(backButtonText)
    cy.get(billsBox).contains(newValue)
}

module.exports = {

    clickEditBill,
    verifyEditedBill

}