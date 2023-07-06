
import { DELETE_TODO, GET_TODO, SAVE_TODO, UPDATE_TODO} from "./actiontype";

export const getUserList=(data)=>({
  type:GET_TODO,
  payload:data
})
export const postData =(data)=>({
  type: SAVE_TODO,
  payload: data
})
export const deleteData =(id)=>({
  type:DELETE_TODO,
  payload:id
})
export const editData =(id)=>({
  type:UPDATE_TODO,
  payload:id
})


