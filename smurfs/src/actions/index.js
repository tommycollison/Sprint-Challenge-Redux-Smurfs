/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'
export const GET_SMURFS = 'GET_SMURFS'
export const LOADING = 'loading'
export const ADD_SMURF = "ADD_SMURF"
export const DELETE_SMURFS = 'DELETE_SMURFS'
export const ERROR = 'ERROR'



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
  dispatch({ type: LOADING })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      console.log(response.data)
      dispatch({ type:GET_SMURFS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR , payload: err.errorMessage})
    })
}

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
    .then( response => {
      dispatch({type: GET_SMURFS, payload: response.data})
    })
  }
}