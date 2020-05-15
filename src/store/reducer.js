import { CHANGE_INPUT, ADD_MENU, DELETE_MENU, GET_MENU } from './actionTypes.js' // 引入actionType

const defaultState = { // 默认数据
  placeholderText: '请输入菜品名称',
  menuList: ['啤酒鸭', '宫保鸡丁', '水煮肉片', '糖醋排骨']
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      let newState = JSON.parse(JSON.stringify(state)) // 深拷贝state
      newState.inputValue = action.value
      return newState
    case ADD_MENU:
      let newState2 = JSON.parse(JSON.stringify(state))
      newState2.menuList.push({
        name: newState2.inputValue
      })
      newState2.inputValue = ''
      return newState2
    case DELETE_MENU:
      let newState3 = JSON.parse(JSON.stringify(state))
      newState3.menuList.splice(action.index, 1)
      return newState3
    case GET_MENU:
      let newState4 = JSON.parse(JSON.stringify(state))
      newState4.menuList = action.data
      return newState4
    default:
      return state
  }
}