import React,  { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

class WizardEleven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                
                      
                    <p>Here is an overview of your form:</p> 

                    <div >

                        <div className="overarching-div">
                            <div className="form" name="nameLabel">Full Name: 
                                <p className="name p2">
                                    {this.props.firstName} {this.props.lastName}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="emailLabel">Email: 
                                <p className="email p2">
                                  {this.props.email}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="loanTypeLabel">Loan Type: 
                                <p className="loanType p2">
                                    {this.props.loanType}
                                </p> 
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="propertyTypeLabel">Property Type: 
                                <p className="propertyType p2">
                                    {this.props.propertyType}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="cityLabel">Property Location: 
                                <p className="city p2"> 
                                    {this.props.city}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="propertyPurposeLabel">Purchase Reason:
                                <p className="propertyPurpose p2">
                                    {this.props.propToBeUsedOn}
                                </p> 
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="foundLabel">Property Already Located: 
                                <p className="found p2">
                                    {this.props.found}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="agentLabel">Agent Already Engaged: 
                                <p className="agent p2">
                                    {this.props.realEstateAgent}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="priceLabel">Estimated Price of Property: 
                                <p className="price p2">
                                    {this.props.cost}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="downPaymentLabel">Estimated Down Payment: 
                                <p className="downPayment p2">
                                    {this.props.downPayment}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="creditScoreLabel">Credit Score: 
                                <p className="creditScore p2"> 
                                    {this.props.credit}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="creditScoreLabel">Credit History: 
                                <p className="creditHistory p2">
                                    {this.props.history}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form" name="addressLabel">Current Address: 
                                <p className="p2">
                                    <span id="addressOne" >{this.props.addressOne}</span> <br />
                                    <span id="addressTwo" >{this.props.addressTwo}</span> <br />
                                    <span id="addressThree" >{this.props.addressThree}</span>
                                </p>
                            </div>
                        </div>

                    </div>   
                </div>
               <div className="row">
                    <Link to="/finish"> <button name="sendButton">Send</button></Link>
                    <Link to="/"> <button name="restartButton">Start Over</button></Link>
               </div>
            </div>

            )
       }
}

function mapStateToProps( state ) {

        return{ 
            loanType: state.loanType,
            propertyType: state.propertyType,
            city: state.city,
            propToBeUsedOn: state.propToBeUsedOn,
            found: state.found,
            realEstateAgent: state.realEstateAgent,
            cost: state.cost,
            downPayment: state.downPayment,
            credit: state.credit,
            history: state.history,
            addressOne: state.addressOne,
            addressTwo: state.addressTwo,
            addressThree: state.addressThree,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email
        };
        
}
export default connect(mapStateToProps)(WizardEleven); 
