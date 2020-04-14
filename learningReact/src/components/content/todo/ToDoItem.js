import React from 'react'

function ToDoItem(props) {
    const styles = {
        display: "flex"
    }

    return (
        <div className="todo-item" style={styles}>
            <div className="checkboxDiv">
                <input 
                    type="checkbox" 
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item.id)} 
                />
            </div>
            
            <p style={{margin: 0, marginLeft: 10, color: "rgb(86, 158, 199)"}}>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem