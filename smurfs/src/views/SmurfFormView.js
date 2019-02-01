import React from 'react';

import SmurfForm from '../components/SmurfForm';
import { addSmurf } from '../actions';

import { connect } from 'react-redux';

class SmurfFormView extends React.Component{
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    };

    changeHandler = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        })
    }

    addNewSmurf = () => {
        this.props.addSmurf(this.state.smurf);
        this.setState({ smurf: '' })
    }

    render(){
        return(
            <SmurfForm 
            addNewSmurf={this.addNewSmurf}
            changeHandler={this.changeHandler}
            smurf={this.state.smurf}
            />
        );
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps,
    { addSmurf }
    )(SmurfFormView);