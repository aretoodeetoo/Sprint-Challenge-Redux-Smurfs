import {
  START,
  FAIL,
  
  // Fetch initial Smurf list
  FETCH_SMURFS_SUCCESS,
  // Add Smurf action creator
  ADD_SMURFS_SUCCESS,
  // Delete Smurf action creator
  DELETE_SMURF_SUCCESS,
  // Update Smurf action creator
  UPDATE_SMURF_SUCCESS,
} from '../actions';


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: []
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfs = (state = initialState, action) => {
  switch (action.type){
    case FETCH_SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: action.payload
    }
    
    case ADD_SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      error: ''
    }

    case DELETE_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      error: ''
    }

    case UPDATE_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      error: ''
    }

    default:
    return state;
  }
}

export default smurfs;