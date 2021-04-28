/// <reference types="Cypress" />

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
const number =  '1'
const floor = '1'
const price = '500'
const features = 'balcony'

//bills values

const newValue = '500'

describe('Test Suite', function() {
    beforeEach(() => {
        cy.visit(targets.baseURL)
        loginFunctions.checkTitle(cy)
        indexFunctions.logout()
        loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
    })

    
it('Tests Failed Login', function(){
    indexFunctions.logout()
    loginFunctions.testFailLogin(cy, targets.usernameFail, targets.passwordFail, 'Bad username or password')
})

it('Test Successful Login', function(){
    indexFunctions.logout()
    loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
})

it('Tests Logout', function(){
    indexFunctions.logout()
})


it('Creates, Verifies, and Deletes room', function(){
    indexFunctions.viewRooms()
    roomsFunctions.clickCreateRoom()
    newRoomFunctions.newRoom(category, number, floor, price, features)
    roomsFunctions.verifyRoom(category, number, floor, price, features)
    roomsFunctions.deleteRoom()
})

it('Creates, Verifies, and Deletes client', function(){
    indexFunctions.viewClients()
    clientsFunctions.clickCreateClient()
    newClientFunctions.newClient(targets.sampleName, targets.sampleEmail, targets.samplePhone)
    clientsFunctions.verifyClient()
    clientsFunctions.deleteClient()
})

it.only('Edits an Existing Bill', function(){
    indexFunctions.viewBills()
    billsFunctions.clickEditBill()
    editBillsFunctions.editBill(newValue)
    billsFunctions.verifyEditedBill(newValue)
})


}) 