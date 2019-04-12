import axios from 'axios'

export const LOADING = "LOADING"
export const GET_SMURFS = "GET_SMURFS"
export const ERROR = "ERROR"
export const ADD_SMURF = "ADD_SMURF"
export const DELETE_SMURF = "DELETE_SMURF"

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/



export const getSmurfs = () => dispatch => {
dispatch({ type: LOADING });
axios
  .get(`http://localhost:3333/smurfs`)
  .then(response => {
    console.log(response.data);
    dispatch({ type: GET_SMURFS, payload: response.data });
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err.errorMessage });
  }); 
}

