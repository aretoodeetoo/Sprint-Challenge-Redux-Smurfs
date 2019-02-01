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

const initialState = {
  smurfs: []
}

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