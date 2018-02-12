const selectors = require('../supporting/selectors')
const data = require('../supporting/data')
const functions = require('../supporting/functions')

module.exports = {
    beforeEach: function (browser) {
        browser.url('http://localhost:3000/#/')
    },
    after: function (browser) {
        browser.end()
    },
 
    'Test 1 with good data': function(browser) {
    functions.goodDataTest1(browser, data.goodData.test_1 )
    },
    'Test 2 with good data': function(browser) {
        functions.goodDataTest1(browser, data.goodData.test_2)
    }
    
    // 'Test 2 with bad data': function


    }
