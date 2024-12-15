import React from 'react'

export default function List(props) { 
  return (
    <div>
        <ul className="list-group"> 
            {
              props.todos.length > 0 ? props.todos.map((value, index) => (
                <li className="list-group-item d-flex justify-content-between" key={index}>
                  <div>{value}</div>
                  <div>
                  <button className="btn btn-warning" onClick={() => props.editTodo(index, value)}>Edit</button>
                  <button className="btn btn-danger ms-2" onClick={() => props.deleteTodo(value)}>Delete</button>
                  </div>  
                </li>
              )) : <li className="list-group-item">No Todo</li>
            }        
        </ul>
    </div>
  )
}


// rendering list
/*

  return (
    <div>
        <ul className="list-group"> 
            {
              props.todos.length > 0 ? props.todos.map((value, index) => {
                return <li className="list-group-item" key={index}>{value}</li>
              }) : <li className="list-group-item">No Todo</li>
            }        
        </ul>
    </div>
  )

*/
