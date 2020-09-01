import React from 'react';
import './TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function TodoList(properties) {
    const todoItems = properties.todoItems;
    const todoList = todoItems.map(todoItem => {
        return <div className="list" key={todoItem.key}>
            <p>
                <input onChange={(event) => {
                    let checked = event.target.checked;
                    properties.checkTodoItem(checked, todoItem.key, todoItem.text)
                }}
                    type="checkbox" id="checkBoxTodo" style={{ textDecoration: properties.checked ? "line-through" : "none" }}
                />

                <input type="text" id={todoItem.key} value={todoItem.text}
                    onChange={(event) => {
                        properties.updateItem(event.target.value, todoItem.key)
                    }
                    } />

                <span>
                    <FontAwesomeIcon className="favicons" icon="trash" id="trashIcon"
                        onClick={() => properties.deleteTodoItem(todoItem.key)}></FontAwesomeIcon>
                </span></p>
        </div>
    }

    )
    return (
        <div>
            <FlipMove>
                {todoList}
            </FlipMove>
        </div>
    )
}

export default TodoList;