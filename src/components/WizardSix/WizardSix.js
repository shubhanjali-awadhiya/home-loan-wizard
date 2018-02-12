import React, { Component } from 'react';
import { updateCost, updateDownPayment } from './../../ducks/reducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class WizardSix extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            priceInError: false,
            downInError: false
        }
        this.price = ''
        this.priceError = 'The price needs to be a valid dollar amount, greater than $0, and no less than the down payment.'
        this.down = ''
        this.downError = 'The down payment needs to be a valid dollar amount, though it can be $0.'

        this.priceUpdate = this.priceUpdate.bind(this)
        this.downUpdate = this.downUpdate.bind(this)
        this.validate = this.validate.bind(this)
    }
    priceUpdate(value) {
        this.props.updateCost(value)
        this.price = value
    }
    downUpdate(value) {
        this.props.updateDownPayment(value)
        this.down = value
    }
    validate() {
        let priceOff = false
        let downOff = false
        // eslint-disable-next-line
        let currencyReplace = /[^0-9\.-]+/g
        // eslint-disable-next-line
        let regex = /^(\$|)([0-9]\d{0,2}(,\d{3})*|([0-9]\d*))(\.\d{2})?$/
        if (!regex.test(this.down)) {
            downOff = true
        }
        if (!regex.test(this.price)) {
            priceOff = true
            console.log('ping')
        }
        else if (Number(this.price.replace(currencyReplace)) <= 0) {
            priceOff = true
            console.log('foo')
        }
        else if (Number(this.price.replace(currencyReplace)) < Number(this.down.replace(currencyReplace))) {
            priceOff = true
            console.log('bar')
        }
        if (downOff || priceOff) {
            this.setState({ priceInError: priceOff, downInError: downOff })
        }
        else {
            this.setState({ validated: true })
        }
    }
    render() {
        if (this.state.validated) {
            return <Redirect to="/wSeven" push />
        }
        return (
            <div className="parent-div">
                <div className="vert-align">
                    <p name="promptText1">What is the estimated purchase price?</p> <br />


                    <input type="text" className={this.state.priceInError ? 'invalid' : null} name="price" placeholder="$0.00" onChange={(e) => this.priceUpdate(e.target.value)} /> <br />


                    <p name="promptText2">How much are you putting down as a down payment?</p> <br />


                    <input type="text" className={this.state.downInError ? 'invalid' : null} name="down" placeholder="$0.00" onChange={(e) => this.downUpdate(e.target.value)} />


                    <button name="nextButton" className="nextButton" onClick={() => { this.validate() }}> Next </button>

                    <p className='errorMessage'>{this.state.priceInError ? this.priceError : null}</p>
                    <p className='errorMessage'>{this.state.downInError ? this.downError : null}</p>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cost: state.cost,
        downPayment: state.downPayment
    };
}
export default connect(mapStateToProps, { updateCost, updateDownPayment })(WizardSix); 