import React, { useEffect, useState } from 'react'

export default function Input(props) {
  let [todo, setTodo] = useState('');
  let [error, setError] = useState(false);

  const inputChange = (event) => {
    setTodo(event.target.value);

    if(event.target.value.length > 0) {
      setError(false)
    }else {
      setError(true)
    }
  }

  const submit = (event) => {
    event.preventDefault();

    if(todo.length > 0) {
      //props.addTodo(todo);
      if(props.editData.index > -1) {
        props.updateTodo(props.editData.index, todo)
      }else {
        props.addTodo(todo);
      }

      setTodo('')
    }else {
      setError(true)
    }     
  }

  useEffect(() => {
    setTodo(props.editData.data)
  }, [props.editData.data, setTodo])

  return (
    <div> 
        <form className="row" onSubmit={submit}>
            <div className="col-10">
                <input type="text" className="form-control" placeholder="Enter Todo" value={todo} onChange={inputChange}/>
            </div>

            {
              error && <p className="text-danger">Please Enter Todo</p>
            }
            
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">
                  {
                    props.editData.index > -1 ? 'update' : 'Add'
                  }
                </button>
            </div>
        </form>
    </div>
  )
}
