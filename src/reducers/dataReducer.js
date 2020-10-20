
/* 
  src/reducers/simpleReducer.js
*/
import * as actionTypes from "./../actions/action.types"
export default (state = {}, action) => {
  const todosData = null;
  switch (action.type) {
    case actionTypes.TODOS_DATA_REQUEST:
      
      return Object.assign({},state, {
        isLoading: true,
        todosData: null
      })
      break;
    case actionTypes.TODOS_DATA_SUCCESS:
      
      return Object.assign({},state, {
        isLoading: false,
        todosData: action.data
      })
      break;
    case actionTypes.TODOS_DATA_FAILURE:
      return Object.assign({},state, {
        isLoading: false,
        todosData: null
      })
      break;
    default:
      
      return { todosData: todosData, 
        isLoading: false }
  }
}
