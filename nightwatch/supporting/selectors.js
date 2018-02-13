module.exports = {
    mainScreen : 'div[class="parent-div"]',
    mainScreenTitle: 'h1[name="promptText"]',
    nextButton : 'button[name="nextButton"]',
    loanType: {
        loanTypeQuestion: 'p[name="promptText1"]',
        dropDown: 'select[id="loanTypes"]',
        homePurchase: 'option[value="Home Purchase"]',
        refinance: 'option[value="Refinance"]',
        homeEquityLoanLine: 'option[value="Home Equity"]'
    },

    propertyType: {
        dropDown: 'select[id="propertyTypes"]',
        singleFamilyHome: 'option[value="Single Family Home"]',
        townHome: 'option[value="Town Home"]',
        condo: 'option[value="Condo"]',
        multiFamylyDwelling: 'option[value="Multi Family Dwelling"]',
        mobileHome: 'option[value="Mobile Home"]',
        errorline: 'div[class="vert-align"]',
    
    },
    cityQuestion: 'p[name="promptText"]',
    cityName: 'input[name="city"]',
    errorline1: 'p[name="errorMessage"]',

    propertyPurpose: {
        propertyPurposeQuestion: 'p[name="promptText"]',
        primaryHome: 'button[value="Primary Home"]',
        rentalProperty: 'button[value="Rental Property"]',
        secondaryHome: 'button[value="Secondary Home"]'
    },

    newHome: {
        newHomeQuestion: 'p[name="promptText"]',
        yes: 'button[name="yesButton"]',
        no: 'button[name="noButton"]',
    },

    realEstateAgent: {
        realEstateAgentQuestion: 'p[name="promptText"]',
        yes: 'button[name="yesButton"]',
        no: 'button[name="noButton"]'
    },

    estimatePurchasePrice: 'input[name="price"]',
    estimatePurchasePriceQuestion: 'p[name="promptText1"]',
    downPayment: 'input[name="down"]',

    creditScore: {
        creditScoreQuestion: 'p[name="promptText"]',
        excellent: 'button[value="Excellent"]',
        good: 'button[value="Good"]',
        fair: 'button[value="Fair"]',
        poor: 'button[value="Poor"]'
    },

    bankrutcyHistory: {
        bankruptcyHistoryQuestion: 'p[name="promptText"]',
        no: 'button[value="Has not been in bankruptcy or foreclosure"]',
        bankruptcy: 'button[value="Has had bankruptcy"]',
        foreclosure: 'button[value="Has had a foreclosure"]',
        both: 'button[value="Has had both a foreclosure and a bankruptcy"]'
    },

    addressInput: {
        addressQuestion: 'p[name="promptText"]',
        lineOne: 'input[id="addressOne"]',
        lineTwo: 'input[id="addressTwo"]',
        lineThree: 'input[id="addressThree"]',
        errorline1: 'li[name="addOneErrorMessage"]',
        errorline2: 'li[name="addThreeErrorMessage"]'
    },

    contactInfo: {
        contactInfoQuestion: 'p[name="promptText"]',
        firstname: 'input[id="first"]',
        lastName: 'input[id="last"]',
        email: 'input[id="email"]',
        errorline1: 'li[name="addOneErrorMessage"]',
        errorline2: 'li[name="addTwoErrorMessage"]',
        errorline3: 'li[name="addThreeErrorMessage"]'
    },

    overView: {
        send: 'button[name="sendButton"]',
        startAgain: 'button[name="restartButton"]',
        overViewTemplate: 'div[class="vert-align"]',
        nameOutput: 'p[class="name p2"]',
        emailOutput: 'p[class="email p2"]',
        loanTypeOutput: 'p[class="loanType p2"]',
        propertyTypeOutput: 'p[class="propertyType p2"]',
        cityOutput: 'p[class="city p2"]',
        propertyPurposeOutput: 'p[class="propertyPurpose p2"]',
        newHomeOutput: 'p[class="found p2"]',
        realEstateAgentOutput: 'p[class="agent p2"]',
        estimatePurchasePriceOutput: 'p[class="price p2"]',
        downPaymentOutput: 'p[class="downPayment p2"',
        creditScoreOutput: 'p[class="creditScore p2"]',
        bankruptcyHistoryOutput: 'p[class="creditHistory p2"]',
        currentAddressOutput: {
            lineOne: 'span[id="addressOne"]',
            lineTwo: 'span[id="addressTwo"]',
            lineThree: 'span[id="addressThree"]'
        },
    },

        finalScreen: {
            finalScreenpage: 'div[class="vert-align"]',
            home: 'button[class="margin-btn"]'
        }

    

}