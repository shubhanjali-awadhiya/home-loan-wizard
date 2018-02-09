import React, { Component } from 'react';
import { updateCity } from './../../ducks/reducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class WizardTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            inError: false
        }
        this.cityName = ''
        this.cityError = 'This field requires a City Name (letters, periods and dashes allowed) and a State abbreviation (separated by a comma, no longer than 30 characters) or a 5 digit zip code.  i.e. "94111" and "San Francisco, CA"'

        this.updateCityName = this.updateCityName.bind(this)
        this.validate = this.validate.bind(this)
    }
    updateCityName(value) {
        this.props.updateCity(value)
        this.cityName = value
    }
    validate() {
        let regex = /^(([a-zA-Z. -]{1,26}, [A-Z]{2})|^(\d{5}))$/g
        if (regex.test(this.cityName))
            this.setState({ validated: true })
        else
            this.setState({ inError: true })
    }
    render() {
        if (this.state.validated) {
            return <Redirect to="/wThree" push />
        }

        return (
            <div className="parent-div">
                <div className="vert-align">

                    <p name="promptText">In what city and state or zip code are you looking for property?</p><br />

                    <input name="city" className={this.state.inError?"invalid":null} placeholder="San Francisco, CA / 94111" type="text" onChange={(e) => { this.updateCityName(e.target.value) }} />

                    <button name="nextButton" className="nextButton" onClick={() => { this.validate() }}> Next </button>

                    <p name="errorMessage" className={"errorMessage"}>{this.state.inError?this.cityError:''}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        city: state.city
    };
}
export default connect(mapStateToProps, { updateCity })(WizardTwo); 