import React from 'react';
import { connect } from 'react-redux';

import { getSmurfList, deleteSmurf } from '../actions';

import SmurfList from '../components/SmurfList';

class SmurfListView extends React.Component{
    state = {
        smurfs: []
    }

    componentDidMount(){
        this.props.getSmurfList();
    }

    render(){
        return(
            <SmurfList 
            smurfs={this.props.smurfs}
            deleteSmurf={this.props.deleteSmurf}
            />
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(
    mapStateToProps,
    { getSmurfList, deleteSmurf }
)(SmurfListView)