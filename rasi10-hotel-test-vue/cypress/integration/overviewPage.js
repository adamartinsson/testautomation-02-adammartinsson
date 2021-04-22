/// <reference types="Cypress" />

const subTitle = 'Tester Hotel Overview'
const logOutButton = '.user > .btn'
const logOutButtontext = 'Logout'

//room consts
const roomTitle = ':nth-child(1) > h4'
const roomAmount = '.blocks > :nth-child(1) > div'
const roomViewButton = ':nth-child(1) > .btn'
const roomViewButttontext = 'View'
//client consts
const clientsTitle = ':nth-child(2) > h4'
const clientsAmount = '.blocks > :nth-child(2) > div'
const clientsViewButton = '.blocks > :nth-child(2) > .btn'
const clientsViewButtonText = 'View'
//bills consts
const billsTitle = ':nth-child(3) > h4'
const billsTotal = ':nth-child(3) > :nth-child(2)'
const billsPaid = ':nth-child(3) > :nth-child(3)'
const billsViewButton = ':nth-child(3) > .btn'
const billsViewText = 'View'
//reservations consts
const reservTitle = ':nth-child(4) > h4'
const reservTotal = ':nth-child(4) > :nth-child(2)'
const reservCurrent = ':nth-child(4) > :nth-child(3)'
const reservViewButton = ':nth-child(4) > .btn'
const reservViewText = 'View'

