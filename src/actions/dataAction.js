/* 
  src/actions/simpleAction.js
*/

import * as actionTypes from "./action.types";
import * as constants from "./../constants/application.constant";
import axios from 'axios';

export function getTodosRequest(){
  return {
    type: actionTypes.TODOS_DATA_REQUEST
  }
}

export function getTodosSuccess(data){
  
  return {
    type: actionTypes.TODOS_DATA_SUCCESS,
    data
  }
}

export function getTodosFailure(data){
  
  return {
    type: actionTypes.TODOS_DATA_FAILURE,
    data
  }
}

export function getTodosData () {
  return async (dispatch, getState) => {
    
    dispatch(getTodosRequest())
    try {
      const resut = await axios.get(constants.APIURL);
      
      const resultJson = resut.data; 
      dispatch(getTodosSuccess(resultJson))
    } catch (error) { 
      
      dispatch(getTodosFailure(error))
    }     
  }
}
  