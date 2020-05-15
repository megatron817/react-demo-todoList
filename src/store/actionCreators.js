import { CHANGE_INPUT, ADD_MENU, DELETE_MENU, GET_MENU } from './actionTypes.js' // 引入actionType
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addMenuAction = () => ({
  type: ADD_MENU
})

export const deleteMenuAction = (index) => ({
  type: DELETE_MENU,
  index
})

export const getMenuAction = (data) => ({
  type: GET_MENU,
  data
})

export const getToDoList = () => {
  return (dispatch) => {
    axios.get('http://rap2.taobao.org:38080/app/mock/247628/menuList').then(res => {
      const action = getMenuAction(res.data.data)
      dispatch(action)
    }).catch(err => {
      console.log(err)
    })
  }
}