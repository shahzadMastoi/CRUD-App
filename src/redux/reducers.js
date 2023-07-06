// import { FAIL_REQUEST, GET_LIST, MAKE_REQUEST } from "./actions";

import { DELETE_TODO, GET_TODO, SAVE_TODO, UPDATE_TODO } from "./actiontype";

// import  actions from "./actions"
const initialState = [];


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_TODO:
      return [
        ...state,
         action.payload,
      ];
      case GET_TODO:
        return action.payload;

        case DELETE_TODO:
          const filtered = state.filter((item)=>item.id !==action.payload)
        return filtered 
        case UPDATE_TODO:
          const maped = state.map((item)=>item.id ==action.payload.id ? action.payload :item)
        return maped 
      
      default:
        return state;
    }
  };
