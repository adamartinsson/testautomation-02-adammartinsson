/// <reference types="Cypress" />

import * as loginFunctions from '../integration/loginPage'
import * as targets from '../targets/targets'
import * as overviewFunctions from '../integration/overviewPage'

describe('Test Suite', function() {
    beforeEach(() => {
        cy.visit(targets.baseURL)
        loginFunctions.checkTitle(cy)
        loginFunctions.logout()
        loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
    })


    
it('Failed Login test', function(){
    loginFunctions.logout()
    loginFunctions.testFailLogin(cy, targets.usernameFail, targets.passwordFail, 'Bad username or password')
})

it('Successful Login test', function(){
    loginFunctions.logout()
    loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
})

it('Logout test', function(){
    loginFunctions.logout()
})

it.only('Create Room test', function(){
    overviewFunctions.createRoom()
})


it('Delete Room Test', function(){
    overviewFunctions.deleteRoom()
})

it('Delete All Rooms', function(){
    overviewFunctions.deleteAllRooms()
})

})