/// <reference types="Cypress" />

//importing functions

import * as targets from '../targets/targets'
import * as loginFunctions from '../pages/loginPage'
import * as indexFunctions from '../pages/indexPage'
import * as roomsFunctions from '../pages/roomsPage.js'
import * as newRoomFunctions from '../pages/newRoomPage.js'
import * as clientsFunctions from '../pages/clientsPage.js'
import * as newClientFunctions from '../pages/newClientPage.js'
import * as billsFunctions from '../pages/billsPage.js'
import * as editBillsFunctions from '../pages/editBillPage.js'

//create room values
const category = 'twin'
const number =  targets.sampleRoomNumber
const floor = targets.sampleFloorNumber
const price = targets.sampleRoomPrice
const features = 'balcony'

//bills values
const newValue = targets.sampleBillsPrice

//beforeEach verifies page, resets login-state, then logs in

describe('Test Suite', function() {
    beforeEach(() => {
        cy.visit(targets.baseURL)
        loginFunctions.checkTitle(cy)
        indexFunctions.logout()
        loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
    })

//Login and logout tests

it('Tests Failed Login', function(){
    indexFunctions.logout()
    loginFunctions.testFailLogin(cy, targets.usernameFail, targets.passwordFail, 'Bad username or password')
    cy.wait(1000).percySnapshot()
})

it('Test Successful Login', function(){
    indexFunctions.logout()
    loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
    cy.wait(1000).percySnapshot()
})

it('Tests Logout', function(){
    indexFunctions.logout()
})

//Rooms test

it('Creates, Verifies, and Deletes room', function(){
    indexFunctions.viewRooms()
    roomsFunctions.clickCreateRoom()
    newRoomFunctions.newRoom(category, number, floor, price, features)
    roomsFunctions.verifyRoom(category, number, floor, price, features)
    cy.wait(1000).percySnapshot()
    roomsFunctions.deleteRoom()
})

//Clients test

it('Creates, Verifies, and Deletes client', function(){
    indexFunctions.viewClients()
    clientsFunctions.clickCreateClient()
    newClientFunctions.newClient(targets.sampleName, targets.sampleEmail, targets.samplePhone)
    clientsFunctions.verifyClient()
    cy.wait(1000).percySnapshot()
    clientsFunctions.deleteClient()
})

//Bills test

it('Edits an Existing Bill', function(){
    indexFunctions.viewBills()
    billsFunctions.clickEditBill()
    editBillsFunctions.editBill(newValue)
    cy.wait(1000).percySnapshot()
    billsFunctions.verifyEditedBill(newValue)
})


}) 