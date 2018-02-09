import React,  { Component } from 'react';
import { updateFirstName, updateLastName, updateEmail } from './../../ducks/reducer'
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'

class WizardTen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            firstNameError: false,
            lastNameError: false,
            emailError: false
        }
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.firstNameErrorMessage = 'The first name must be between 1 and 30 characters long.'
        this.lastNameErrorMessage = 'The last name must be between 1 and 30 characters long.'
        this.emailErrorMessage = 'The email address must follow standard email format (i.e. andy@gmail.com), and cannot exceed 50 characters in length.'

        this.firstNameUpdater = this.firstNameUpdater.bind(this)
        this.lastNameUpdater = this.lastNameUpdater.bind(this)
        this.emailUpdater = this.emailUpdater.bind(this)
        this.validate = this.validate.bind(this)
    }
    firstNameUpdater(value) {
        this.firstName = value
        this.props.updateFirstName(value)
    }
    lastNameUpdater(value) {
        this.lastName = value
        this.props.updateLastName(value)
    }
    emailUpdater(value) {
        this.email = value
        this.props.updateEmail(value)
    }
    validate() {
        let firstNameInvalid = false
        let lastNameInvalid = false
        let emailInvalid = false
        // eslint-disable-next-line
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (this.firstName.length > 30 || this.firstName.length < 1)
            firstNameInvalid = true
        if (this.lastName.length > 30 || this.lastName.length < 1)
            lastNameInvalid = true
        if (!regex.test(this.email) || this.email.length > 50)
            emailInvalid = true

        if (firstNameInvalid || lastNameInvalid || emailInvalid)
            this.setState({ firstNameError: firstNameInvalid, lastNameError: lastNameInvalid, emailError: emailInvalid })
        else
            this.setState({ validated: true })
    }
    render() {
        if (this.state.validated) {
            return <Redirect to="/wEleven" push />
        }
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p name="promptText">What is your name?</p> <br />

                    <input type="text" id="first" className={this.state.firstNameError?'invalid':''} placeholder="First Name" onChange={ (e)=>this.firstNameUpdater(e.target.value) }/>
                    <input type="text" id="last" className={this.state.lastNameError?'invalid':''} placeholder="Last Name" onChange= { (e)=>this.lastNameUpdater(e.target.value) }/>
                    <input type="text" id="email" className={this.state.emailError?'invalid':''} placeholder="email" onChange={ (e)=>this.emailUpdater(e.target.value) }/>
                    
                    <button name="nextButton" className="nextButton" onClick={()=>{this.validate()}}> Next </button>

                    <ul name="errors">
                        <li name="addOneErrorMessage" className={this.state.firstNameError?"errorMessage":"errorMessage hidden"}>{this.firstNameErrorMessage}</li>
                        <li name="addTwoErrorMessage" className={this.state.lastNameError?"errorMessage":"errorMessage hidden"}>{this.lastNameErrorMessage}</li>
                        <li name="addThreeErrorMessage" className={this.state.emailError?"errorMessage":"errorMessage hidden"}>{this.emailErrorMessage}</li>
                    </ul>
                </div>
            </div>
        )
    }
}


function mapStateToProps( state ) {
  return { 
     firstName: state.firstName,
     lastName: state.lastName,
     email: state.email
  };
}
export default connect(mapStateToProps, { updateFirstName, updateLastName, updateEmail })(WizardTen); 