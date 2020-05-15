import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { message } from 'antd'
import store from './store' // 引入redux的store数据
// import { CHANGE_INPUT, ADD_MENU, DELETE_MENU } from './store/actionTypes.js' // 引入actionType
import { changeInputAction, addMenuAction, deleteMenuAction, getToDoList } from './store/actionCreators.js'
import TodoListUi from './TodoListUi.js'
// import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // 更改绑定的this
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addMenuItem = this.addMenuItem.bind(this)
    this.deleteMenuItem = this.deleteMenuItem.bind(this)
    // 订阅Redux状态，以便及时更新当前页面的state
    store.subscribe(this.storeChange)
  }
  componentDidMount() {
    // axios.get('http://rap2.taobao.org:38080/app/mock/247628/menuList').then(res => {
    //   const action = getMenuAction(res.data.data)
    //   store.dispatch(action)
    // }).catch(err => {
    //   console.log(err)
    // })
    const action = getToDoList()
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUi
        placeholderText={this.state.placeholderText}
        inputValue={this.state.inputValue}
        menuList={this.state.menuList}
        changeInputValue={this.changeInputValue}
        addMenuItem={this.addMenuItem}
        deleteMenuItem={this.deleteMenuItem}
      />
    )
  }
  // 输入框的change事件
  changeInputValue(e) {
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action) // 将action传递给store
  }
  // 更新当前页面组件内的数据
  storeChange() {
    this.setState(store.getState()) // 由于store更新，所以需要更新当前页面的state
  }
  // 添加菜品
  addMenuItem() {
    if (this.state.inputValue && this.state.inputValue.trim()) {
      // const action = {
      //   type: ADD_MENU
      // }
      const action = addMenuAction()
      store.dispatch(action) // 将action传递给store
      message.success('添加成功', 2)
    } else {
      message.warning('请输入菜品名称', 2)
    }
  }
  // 删除菜品
  deleteMenuItem(index) {
    // const action = {
    //   type: DELETE_MENU,
    //   index
    // }
    const action = deleteMenuAction(index)
    store.dispatch(action) // 将action传递给store
    message.success('删除成功', 2)
  }
}

export default TodoList