/// <reference types="cypress" />

const category_input = ':nth-child(1) > select'
const number_input = ':nth-child(2) > input'
const floor_input = ':nth-child(3) > input'
const availability_input = '.checkbox'
const price_input = ':nth-child(5) > input'
const features_input = ':nth-child(6) > select'
const save_input = '.blue'

function newRoom(category, number, floor, price, features) {
    cy.get(category_input).select(category)
    cy.get(number_input).type(number)
    cy.get(floor_input).type(floor)
    cy.get(availability_input).click()
    cy.get(price_input).type(price)
    cy.get(features_input).select(features)
    cy.get(save_input).click()
}

module.exports = {
    newRoom
}