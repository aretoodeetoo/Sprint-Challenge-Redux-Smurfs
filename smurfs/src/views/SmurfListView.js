import React from 'react';
import { connect } from 'react-redux';

import { getSmurfList } from '../actions';

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
            />
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(
    mapStateToProps,
    { getSmurfList }
)(SmurfListView)