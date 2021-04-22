/// <reference types="Cypress" />

import * as loginFunctions from '../integration/loginPage'
import * as targets from '../targets/targets'
import * as overviewFunctions from '../integration/overviewPage'

describe('Test Suite', function() {
    beforeEach(() => {
        cy.visit(targets.baseURL)
        loginFunctions.checkTitle(cy)
    })
    





it('Full Login test', function(){
    loginFunctions.testFullLogin(cy, targets.username1, targets.password1, 'Tester Hotel Overview')
})

})