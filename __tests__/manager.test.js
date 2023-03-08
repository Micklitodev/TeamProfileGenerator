// jest test for ../lib/manager.js   manager class

const Manager = require('../lib/manager'); 

describe('Manager', () => {
    describe('getOfficeNumber', () => {
        it('should return objs officeNumber', () => {
            const obj = new Manager('Mick', 3124, 'manager@testmail.com', '(404) 321 - 5643')
            expect(obj.getOfficeNumber()).toEqual('(404) 321 - 5643')
        })
    });

    describe('getRole', () => {
        it('should return string Manager', () => {
            const obj = new Manager('Mick', 3124, 'manager@testmail.com', '(404) 321 - 5643')
            expect(obj.getRole()).toEqual('Manager')
        })
    });




})