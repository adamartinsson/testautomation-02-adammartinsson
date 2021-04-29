const faker = require('faker');

let generatedFirstName = faker.name.firstName();
let generatedEmail = faker.internet.email();
let generatedPhone = faker.phone.phoneNumber();
let generatedFloorNumber = faker.datatype.number();
let generatedRoomNumber = faker.datatype.number();
let generatedRoomPrice = faker.datatype.number();
let generatedBillsValue = faker.datatype.number();

module.exports = {
    baseURL: 'http://localhost:3000/login', 
    overviewURL: 'http://localhost:3000/',


    //user 1
    username1: 'tester01',
    password1: 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',

    //user 2
    username2: 'tester02',
    password2: 'sppm7qncqmVft5uECkwjLcLdEJGzM3Cw',

    //failed user login
    usernameFail: 'aaa',
    passwordFail: 'aaa',

    //clients sample data
    sampleEmail: generatedEmail,
    sampleName: generatedFirstName,
    samplePhone: generatedPhone,

    //generated values for faker
    sampleFloorNumber: generatedFloorNumber,
    sampleRoomNumber: generatedRoomNumber,
    sampleRoomPrice: generatedRoomPrice,
    
    sampleBillsPrice: generatedBillsValue
    
}