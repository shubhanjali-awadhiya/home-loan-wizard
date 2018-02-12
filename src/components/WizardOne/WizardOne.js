import React, { Component } from 'react';
import { updateLoanType, updatePropertyType } from './../../ducks/reducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class WizardOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            inError: false
        }
        this.loanType = ''
        this.loanError = 'The loan type must be selected from the listed values.'
        this.propType = ''
        this.propError = 'The property type must be selected from the listed values.'

        this.updateLoan = this.updateLoan.bind(this)
        this.updateProp = this.updateProp.bind(this)
        this.validate = this.validate.bind(this)
    }
    updateLoan(value) {
        this.props.updateLoanType(value)
        this.loanType = value
    }
    updateProp(value) {
        this.props.updatePropertyType(value)
        this.propType = value
    }
    validate() {
        if (this.loanType !== '' && this.propType !== '')
            this.setState({ validated: true })
        else
            this.setState({ inError: true })
    }
    render() {
        if (this.state.validated) {
            return <Redirect to="/wTwo" push />
        }
        return (
            <div className="parent-div">
                <div className="vert-align">

                    <p name="promptText1">What type of loan will you be needing?</p> <br />

                    <select id="loanTypes" className={this.state.inError && this.loanType === '' ? "invalid" : null} onChange={(e) => this.updateLoan(e.target.value)}>

                        <option type="text" value="" ></option>
                        <option type="text" value="Home Purchase" >Home Purchase</option>
                        <option type="text" value="Refinance" >Refinance</option>
                        <option type="text" value="Home Equity" >Home Equity Loan/Line of Credit</option>

                    </select> <br />

                    <p name="promptText2">What type of property are you purchasing?</p> <br />

                    <select id="propertyTypes" className={this.state.inError && this.propType === '' ? "invalid" : null} onChange={(e) => this.updateProp(e.target.value)}>

                        <option type="text" value="" ></option>
                        <option value="Single Family Home">Single Family Home</option>
                        <option value="Town Home">Town Home</option>
                        <option value="Condo">Condo</option>
                        <option value="Multi Family Dwelling">Multi Family Dwelling</option>
                        <option value="Mobile Home">Mobile Home</option>

                    </select>

                    <button name="nextButton" onClick={() => { this.validate() }} className="nextButton"> Next </button>

                    <ul>
                        <li className={!this.state.inError && this.propType === '' ? 'hidden' : 'errorMessage'}>{this.loanError}</li>
                        <li className={!this.state.inError && this.loanType === '' ? 'hidden' : 'errorMessage'}>{this.propError}</li>
                    </ul>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loanType: state.loanType,
        propertyType: state.propertyType
    };
}
export default connect(mapStateToProps, { updateLoanType, updatePropertyType })(WizardOne); 