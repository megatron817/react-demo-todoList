import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List, Tag } from 'antd'

const TodoListUi = (props) => {
  return (
    <div style={{ margin: 20 }}>
      <Input
        placeholder={props.placeholderText}
        style={{ width: '250px' }}
        onChange={props.changeInputValue}
        onPressEnter={props.addMenuItem}
        value={props.inputValue}
      />
      <Button type="primary" onClick={props.addMenuItem} style={{ marginLeft: '5px' }}>添加</Button>
      <List
        header={<Tag color="processing">start</Tag>}
        footer={<Tag color="processing">end</Tag>}
        bordered
        dataSource={props.menuList}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button
                size="small"
                danger
                onClick={
                  () => { props.deleteMenuItem(index) }
                }>
                删除
              </Button>
            ]}>
            {item.name}
          </List.Item>
        )}
        style={{ marginTop: 20, width: 318 }}
      />
    </div>
  )
}

export default TodoListUi;