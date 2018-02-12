import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateRealEstateAgent } from './../../ducks/reducer'
import { connect } from 'react-redux';

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">

                    <p name="promptText">Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button name="yesButton" onClick={ (e)=>this.props.updateRealEstateAgent("Yes") }>Yes</button></Link>
                        <Link to="/wSix"><button name="noButton" onClick={ (e)=>this.props.updateRealEstateAgent("No") }>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      realEstateAgent: state.realEstateAgent
    };
}
export default connect(mapStateToProps, { updateRealEstateAgent })(WizardFive); 