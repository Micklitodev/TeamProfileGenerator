// jest test for ../lib/engineer.js   engineer class

const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('should return the github url of the obj', () => {
            const obj = new Engineer('Mick', 2034, 'testing@testemail.com', 'https://github.com/micklitodev')
            expect(obj.getGithub()).toEqual('https://github.com/micklitodev')
        }) 
    });

    describe('getRole', () => {
        it('should return the role of the obj', () => {
            const obj = new Engineer('Mick', 2034, 'testing@testemail.com', 'https://github.com/micklitodev')
            expect(obj.getRole()).toEqual('Engineer')
        })
    });
});