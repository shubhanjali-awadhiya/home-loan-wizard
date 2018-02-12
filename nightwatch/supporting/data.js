module.exports = {
    goodData: {
        test_1: {
            loanType: 'homePurchase',
            propertyType: 'singleFamilyHome',
            cityName: 'Boston',
            propertyPurpose: 'primaryHome',
            newHome: 'yes',
            realEstateAgent: 'yes',
            estimatePurchasePrice: '100000',
            downPayment: '20000',
            creditScore: 'excellent',
            bankruptcyHistory: 'no',
            addressLine1: '1234',
            addressLine2: 'S Fox Ln',
            addressLine3: 'Boston, MA 02101',
            firstName: 'David',
            lastName: 'Escle',
            email: 'david.escle@gmail.com',
            nameOutput: 'David Escle',
            emailOutput: 'david.escle@gmail.com',
            loanTypeOutput: 'Home Purchase',
            propertyTypeOutput: 'Single Family Home',
            cityOutput: 'Boston',
            propertyPurposeOutput: 'Primary Home',
            newHomeOutput: 'True',//yes
            realEstateAgentOutput: 'True',//yes
            estimatePurchasePriceOutput: '100000',
            downPaymentOutput: '20000',
            creditScoreOutput: 'Excellent',
            bankruptcyHistoryOutput: 'Has never been in bankruptcy',//no
            currentAddressOutput: {
                lineOne: '1234',
                lineTwo: 'S Fox Ln',
                lineThree: 'Boston, MA 02101'
            }
        },
        test_2: {
            loanType: 'refinance',
            propertyType: 'townHome',
            cityName: 'Washington',
            propertyPurpose: 'rentalProperty',
            newHome: 'no',
            realEstateAgent: 'no',
            estimatePurchasePrice: '10000000',
            downPayment: '30000',
            creditScore: 'good',
            bankruptcyHistory: 'bankruptcy',
            addressLine1: '5678',
            addressLine2: 'N mad ln',
            addressLine3: 'Paris, FR 75000',
            firstName: 'Scrapy',
            lastName: 'Andrew',
            email: 'scrapyandrew@live.com',
            nameOutput: 'Scrapy Andrew',
            emailOutput: 'scrapyandrew@live.com',
            loanTypeOutput: 'Refinance',
            propertyTypeOutput: 'Town Home',
            cityOutput: 'Washington',
            propertyPurposeOutput: 'Rental Property',
            newHomeOutput: 'False',//no
            realEstateAgentOutput: 'False',//no
            estimatePurchasePriceOutput: '10000000',
            downPaymentOutput: '30000',
            creditScoreOutput: 'Good',
            bankruptcyHistoryOutput: 'Has had bankruptcy before',//banruptcy
            currentAddressOutput: {
                lineOne: '5678',
                lineTwo: 'N mad ln',
                lineThree: 'Paris, FR 75000'
            }
        }
    }
}
