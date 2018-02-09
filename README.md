<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Home Loan Wizard
### Project Requirements
#### Version 1.5

## Introduction

### Purpose

<details>

  <summary>The purpose of the Home Loan Wizard...</summary> is to generate leads for the appropriate parties in the real estate market.  It will gather information about prospective customers, including contact information, and route appropriately.

</details>

### Scope

<details>
  <summary>The scope of the project is to create...</summary> a gated form that will ask appropriate and applicable questions and then a back end that will send the lead to the designated parties.
</details>

## Description

### Interfaces

<details>
  <summary>An interface will need to be created...</summary> to communicate between the form and the lenders' own systems, with all the information provided by the customer as well as a tag indicating the department for whom the report is intended.
</details>

### Environment

<details>
  <summary>The form is a web application...</summary> that should also function completely in a mobile browser.  The latest versions of Chrome, Firefox, Microsoft Edge, and Safari will be supported.
</details>

### User Characteristics

<details>
  <summary>The typical user of this web form is expected...</summary> to be an individual without much tech savvy, so the user interface should be very simple.

  As for the user on the lenders' side, they will have lots of technical acumen, and the interface need only be developed to the standards they provided, sending the information they requested in the format provided.  They will take care of the rest.
</details>

## Requirements

### External Interfaces

<details>
  <summary>The interface with the lenders' system...</summary> should create an XML document that will be sent to an IP address and port that will be provided later.  However, the information should be in the following format:

  ```xml
    <customer>
      <name>Jane Doe</name>
      <email>jane.doe@gmail.com</email>
      <loan>Refinance</loan>
      <property>Town Home</property>
      <city>New York City, New York</city>
      <type>Secondary Home</type>
      <found>False</found>
      <agent>True</agent>
      <price>$500,000</price>
      <down>$100,000</down>
      <credit>Excellent</credit>
      <bankruptcy>True</credit>
      <foreclosure>False</credit>
      <address-1>341 S Main St</address-1>
      <address-2>Ste 100</address-2>
      <address-3>Salt Lake City, UT 84111</address-3>
    </customer>
  ```

  The generation of this XML will be worked on AFTER the form's functionality has been checked and verified.

</details>

### Functions

<details>
  <summary>The form will be broken into several screens for ease of use.</summary>

  1. The welcome screen
    * This screen will have the name of the wizard and a button to start the process of generating the lead.
  2. Loan and property type query screen
    * This screen will require a description of the type of loan requested, as well as the type of property the loan will service.
    * Acceptable values for type of home loan include:
      * Home Purchase
      * Refinance
      * Home Equity Loan/Line of Credit
    * Acceptable values for type of property include:
      * Single Family Home
      * Town Home
      * Condo
      * Multi Family Dwelling
      * Mobile Home
    * Possible Errors
      * "The loan type must be selected from the listed values."
      * "The property type must be selected from the listed values."
  3. Property location screen
    * This screen will request from the user the zip or city and state in which their desired property is located.
    * Acceptable values:
      * A five digit zip code
      * A string of letters (as well as dashes/periods) with a comma, space and two more characters, no more than 20 characters in length
      * I.E.
        * 94111
        * St. George, UT
        * San Francisco, CA
    * Error Message:
      * 'This field requires a City Name (letters, periods and dashes allowed) and a State abbreviation (separated by a comma, no longer than 30 characters) or a 5 digit zip code.  i.e. "94111" and "San Francisco, CA"'
  4. Property purchase screen
    * This screen will discover how the property will be utilized by the customer
    * Acceptable values include:
      * Primary Home
      * Rental Property
      * Secondary Home
  5. Property discovered screen
    * This screen will inquire as to whether the user has already found the property the loan will service.
  6. Agent discovered screen
    * This screen will inquire as to whether the user has a real estate agent with whom they are working.
  7. Price estimation screen
    * This screen will require an estimate for both the purchase price and available down payment amount.
    * Acceptable values include any dollar formatted amount for both data points.
       * $1000.00
       * 1000.00
       * $1000
       * 1000
       * $1,000.00
       * $1,000
       * 1,000.00
       * 1,000
    * Down payment cannot be MORE than purchase price.
    * Possible Error Messages:
      * 'The price needs to be a valid dollar amount, greater than $0, and no less than the down payment.'
      * 'The down payment needs to be a valid dollar amount, though it can be $0.'
  8. Credit score estimation
    * This screen will request an estimate of the user's credit score.
    * Acceptable values include:
      * Excellent
      * Good
      * Fair
      * Poor
  9. Bankruptcy / foreclosure info request screen
    * This screen will request the user's bankruptcy and foreclosure history in the last 7 years.
    * Acceptable responses include:
      * Neither
      * Bankruptcy
      * Foreclosure
      * Both
    * Formatted on the result screen, they will appear as the following (in the same order as the responses listed above):
      * Has never been in bankruptcy
      * Has had bankruptcy before
      * Has had a foreclosure before
      * Has had both a foreclosure and a bankruptcy
  10. Current address request screen
    * This screen is to check the user's current address
    * The response should be first line: street address, second line: street address cont'd, third line: city, state, and zip.
    * Acceptable responses include:
      * No more than 50 characters on any line
      * At least 5 characters on the first line
      * The second line is optional
      * The last line will need to reflect the pattern below
        * xxxxxx, xx 00000
        * before the comma, x is any number of letters periods and dashes, at least 1
        * after the comma is a space and a state abbreviation
        * this is followed by one more space and a combination of any 5 numbers
    * Possible Error Messages
      * 'The first line of the address can only be between 5 and 50 characters long.'
      * 'The second line of the address can only be 50 characters long.'
      * 'The last line must follow a standard city, state zip format (San Francisco, CA 94111), with a valid state abbreviation.  It also can be no longer than 50 characters total.'
  11. User information request screen
    * This screen will get contact information from the user
    * Acceptable responses include:
      * First Name - 1-30 characters
      * Last Name - 1-30 characters
      * email - verified email entry
        * x@x.x where 'x' can be any number of letters/numbers
        * No more than 50 characters total
    * On the summary screen, first name and last name will be concatenated.
      * FirstName - AJ
      * LastName - Larson
      * Summary Screen Name - AJ Larson
    * Possible Error Messages
      * 'The first name must be between 1 and 30 characters long.'
      * 'The last name must be between 1 and 30 characters long.'
      * 'The email address must follow standard email format (i.e. andy@gmail.com), and cannot exceed 50 characters in length.'
  12. Summary screen
    * This screen will show the user an overview of the information provided, and will allow them to submit the report, or to star the form over.

  **Error Handling**
  When errors are present in user inputs, a contextualized error message will display and the field(s) in error are highlighted.  Users are required to correct errors before proceeding.

  Once the submit button is selected, the form will be sent to the lenders' server for appropriate distribution within their systems.
</details>

### Performance Requirements

<details>
  <summary>The app should load...</summary> in no longer than 3 seconds.  Once the base application has loaded the page transitions should take no longer than 2 seconds, though our target is no more than 1 second.
</details>

## Project Stakeholders

### Development

<details>
  <summary>Team members</summary>

  Development Manager: Bob

  Developer: Jack

  Developer: Diane
</details>

### Design

<details>
<summary>Team members</summary>

  Designer: Jackie
</details>

### Quality Assurance

<details>
<summary>Team members</summary>

  Team lead: Anne

  Analyst: Frank
</details>

### Industry Partners

<details>
<summary>Partners</summary>

  Lender: Mac
  Underwriter: Millie
  Agent: Marlene
</details>

## Change Logs

<details>

<summary> Version 1.5 </summary>

**Bugs Fixed**
* Version number added to home screen
* City Name updated to Location, given clearer requirements
* Phrasing in dropdowns and on various screens updated
  1. Loan Type: "Home Equity Loan/Line of Credit"
  1. Property Type: "Town Home"
  1. Location Prompt: "In what city and state or zip code are you looking for property?"
  1. Credit History Option: "No" changed to "Neither"
  1. Credit History Values: Updated to reflect the 7 year period (Has had/has not been in) rather than indefinite (never/before, etc)
  1. Current Address Prompt: "What is your current mailing address?"
  1. Summary Screen Labels: Updated to be labels, rather than copied prompts
* Output for Agent and Property found screens changed to match buttons: Yes/No instead of the True/False it was outputting
* Added error handling
* Placeholder text in input fields updated
* When "starting over", all fields are reset
  * Button to start over renamed to "Start Over" from "Start Again"

**Readme Updates**
* Clarified differences between inputs on various pages and expected outputs on the summary
  * Names
  * Credit History
* Added field limits/requirements
  * City Name / Location
  * Address
  * Name
  * Email
* Updated requirements
  * Purchase price & Down payment fields
    * Decimal Points
    * Commas
* Error Handling Mentioned
* README project title updated
* Typos fixed

**Other Updates**
* Added selectors for the Summary Screen field headers

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2018. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
