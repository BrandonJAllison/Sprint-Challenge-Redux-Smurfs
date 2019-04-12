/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, 
GET_SMURFS,
ADD_SMURF,
UPDATE_SMURF, 
DELETE_SMURF,
ERROR } from '../actions'


const initState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initState, action) => {


  switch (action.type) {
      case LOADING:
          return { ...state, loading: true }
      case GET_SMURFS:
          return { ...state, smurfs: action.payload, loading: false }  
      default:
          return state
  }
}

