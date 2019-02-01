import axios from 'axios';

export const START = 'START';
export const FAIL = 'FAIL';

export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';

export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';

export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';

export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';

export const getSmurfList = () => dispatch => {
  dispatch ({ type: START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => 
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
      )
    .catch(err => dispatch({ type: FAIL, payload: err }))
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: START });
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res =>
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data})
      )
    .catch(err => dispatch({ type: FAIL, payload: err}))
}

export const deleteSmurf = smurfId => dispatch => {
  dispatch({ type: START});
  axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(res =>
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
      )
    .catch(err => dispatch({ type: FAIL, payload: err}))
}

export const updateSmurf = (smurfId, smurf) => dispatch => {
  dispatch({ type: START });
  axios
    .put(`http://localhost:3333/smurfs/${smurfId}`, smurf)
    .then(res =>
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
      )
    .catch(err => dispatch({ type: FAIL, payload: err }))
}