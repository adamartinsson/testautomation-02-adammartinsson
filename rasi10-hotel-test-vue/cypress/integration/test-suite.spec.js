/// <reference types="Cypress" />

import * as targets from '../targets/targets'
import * as loginFunctions from '../pages/loginPage'
import * as indexFunctions from '../pages/indexPage'
import * as roomsFunctions from '../pages/roomsPage.js'
import * as newRoomFunctions from '../pages/newRoomPage.js'
import * as clientsFunctions from '../pages/clientsPage.js'
import * as newClientFunctions from '../pages/newClientPage.js'

describe('Test Suite', function() {
    beforeEach(() => {
        cy.visit(targets.baseURL)
        loginFunctions.checkTitle(cy)
        indexFunctions.logout()
        loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
    })

    
it('Failed Login Test', function(){
    indexFunctions.logout()
    loginFunctions.testFailLogin(cy, targets.usernameFail, targets.passwordFail, 'Bad username or password')
})

it('Successful Login test', function(){
    indexFunctions.logout()
    loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
})

it('Logout Test', function(){
    indexFunctions.logout()
})


it('Create, Verify, and Delete room', function(){
    indexFunctions.viewRooms()
    roomsFunctions.clickCreateRoom()
    newRoomFunctions.newRoom('twin', '1', '1', '500', ["balcony", "ensuite", "sea_view", "penthouse"])
    roomsFunctions.verifyRoom()
    roomsFunctions.deleteRoom()
})

it('Create, Verify, and Delete client', function(){
    indexFunctions.viewClients()
    clientsFunctions.clickCreateClient()
    newClientFunctions.newClient(targets.sampleName, targets.sampleEmail, targets.samplePhone)
    clientsFunctions.verifyClient()
    clientsFunctions.deleteClient()
})


}) 