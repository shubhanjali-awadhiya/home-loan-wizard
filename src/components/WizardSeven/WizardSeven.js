import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCredit } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p name="promptText">Estimate your credit score</p> <br />
                    <div className="row">
                        <Link to="/wEight"><button value="Excellent" onClick={ (e)=>this.props.updateCredit('Excellent') }>Excellent</button></Link>
                        <Link to="/wEight"><button value="Good" onClick={ (e)=>this.props.updateCredit('Good') }>Good</button></Link>
                        <Link to="/wEight"><button value="Fair" onClick={ (e)=>this.props.updateCredit('Fair') }>Fair</button></Link>
                        <Link to="/wEight"><button value="Poor" onClick={ (e)=>this.props.updateCredit('Poor') }>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      credit: state.credit,
    };
}
export default connect(mapStateToProps, { updateCredit })(WizardSeven); 