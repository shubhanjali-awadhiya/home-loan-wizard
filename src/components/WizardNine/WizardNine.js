import React, { Component } from 'react';
import { updateAddOne, updateAddTwo, updateAddThree } from './../../ducks/reducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class WizardNine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            addressOneError: false,
            addressTwoError: false,
            addressThreeError: false
        }
        this.addressOne = ''
        this.addressTwo = ''
        this.addressThree = ''
        this.addressOneErrorMessage = 'The first line of the address can only be between 5 and 50 characters long.'
        this.addressTwoErrorMessage = 'The second line of the address can only be 50 characters long.'
        this.addressThreeErrorMessage = 'The last line must follow a standard city, state zip format (San Francisco, CA 94111), with a valid state abbreviation.  It also can be no longer than 50 characters total.'

        this.addressOneUpdater = this.addressOneUpdater.bind(this)
        this.addressTwoUpdater = this.addressTwoUpdater.bind(this)
        this.addressThreeUpdater = this.addressThreeUpdater.bind(this)
        this.validate = this.validate.bind(this)
    }
    addressOneUpdater(value) {
        this.addressOne = value
        this.props.updateAddOne(value)
    }
    addressTwoUpdater(value) {
        this.addressTwo = value
        this.props.updateAddTwo(value)
    }
    addressThreeUpdater(value) {
        this.addressThree = value
        this.props.updateAddThree(value)
    }
    validate() {
        let addOneInvalid = false
        let addTwoInvalid = false
        let addThreeInvalid = false
        // eslint-disable-next-line
        let regex = /^(([a-zA-Z\. -]{1,39}, [A-Z]{2})|^(\d{5})) \d{5}$/g
        if (this.addressOne.length > 50 || this.addressOne.length < 5)
            addOneInvalid = true
        if (this.addressTwo.length > 50)
            addTwoInvalid = true
        if (!regex.test(this.addressThree))
            addThreeInvalid = true

        if (addOneInvalid || addTwoInvalid || addThreeInvalid)
            this.setState({ addressOneError: addOneInvalid, addressTwoError: addTwoInvalid, addressThreeError: addThreeInvalid })
        else
            this.setState({ validated: true })
    }
    render() {
        if (this.state.validated) {
            return <Redirect to="/wTen" push />
        }
        return (
            <div className="parent-div">
                <div className="vert-align">
                    <p name="promptText">What is your current mailing address?</p> <br />

                    <input type="text" className={this.state.addressOneError?'invalid':''} id="addressOne" placeholder="Street Address" onChange={(e) => this.addressOneUpdater(e.target.value)} />
                    <input type="text" className={this.state.addressTwoError?'invalid':''} id="addressTwo" placeholder="Street Address Cont'd (Optional)" onChange={(e) => this.addressTwoUpdater(e.target.value)} />
                    <input type="text" className={this.state.addressThreeError?'invalid':''} id="addressThree" placeholder="San Francisco, CA 94111" onChange={(e) => this.addressThreeUpdater(e.target.value)} />

                    <button name="nextButton" className="nextButton" onClick={() => { this.validate() }}> Next </button>

                    <ul name="errors">
                        <li name="addOneErrorMessage" className={this.state.addressOneError?"errorMessage":"errorMessage hidden"}>{this.addressOneErrorMessage}</li>
                        <li name="addTwoErrorMessage" className={this.state.addressTwoError?"errorMessage":"errorMessage hidden"}>{this.addressTwoErrorMessage}</li>
                        <li name="addThreeErrorMessage" className={this.state.addressThreeError?"errorMessage":"errorMessage hidden"}>{this.addressThreeErrorMessage}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        addressOne: state.addressOne,
        addressTwo: state.addressTwo,
        addressThree: state.addressThree
    };
}
export default connect(mapStateToProps, { updateAddOne, updateAddTwo, updateAddThree })(WizardNine); 