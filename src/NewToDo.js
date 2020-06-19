import React from 'react';

const NewToDo = ({add}) => {
const [text, setText] = useState("");
  return (
    <div>
        <form onSubmit={ props.onSubmit }>
            <label>
                New Item:
                <input type="text" name="name" onChange={ props.onChange }/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
}

export default NewToDo;

// //const AddTodo = ({add}) => {
//   const [text, setText] = useState("");
//   return (
//     <div className="AddTodo">
//       <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
//       <button className="AddTodoButton" onClick={() => {add(text); setText("")}}>Add</button>
//     </div>
//   );
// }

// export default AddTodo;//
