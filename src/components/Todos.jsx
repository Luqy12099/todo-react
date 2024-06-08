import React from 'react'
import TodoItem from './TodoItem';
function Todos({todos}){
    return (
        <div>
            <h1>This is Todos component</h1>
            {todos.map((todo) => {
                return(
                <TodoItem key={todo.id} todo={todo}/>
                )
            })}
        </div>
        )
}


export default Todos;
