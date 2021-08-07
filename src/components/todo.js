import React,{useState} from 'react';


export default function Todo(props){
   const [isEditing, setEditing] = useState(false);
   const [newName, setName]= useState('')

   function handleChange(e) {
     setName(e.target.value);
   }
   function handleSubmit(e){
    e.preventDefault();
    if(newName !==''){props.editTask(props.id,newName);
    setName('');
    setEditing(false);
      }
   }
   const EditTemplate=(
    <div className='card edit todo stack-small'>
    <label className="todo-label" htmlFor={props.id}>edit {props.name}</label>
    <input type='text'className='input-label' onChange={handleChange} value={newName} autoFocus />
    <div className="btn-group">
    <button className="btn btn__danger" onClick={()=>setEditing(false)}>Cancel</button>
    <button className="btn btn-success" onClick={handleSubmit}>Save</button>
    </div>
    </div>)

    const viewTemplate =(
    <div className='card todo stack-small'>
            <div className="c-cb">
          <input defaultChecked={props.completed} type='checkbox' id={props.id} onChange = {() => props.toggleTaskCompleted(props.id)}/>
          <label className="todo-label" htmlFor={props.id}>{props.name}</label>
        </div>
          <div className='btn-group'>
          <button className="btn" onClick= {()=>setEditing(true)}>Edit <span className="visually-hidden">{props.name}</span></button>
          <button className="ml-2 btn btn__danger" onClick ={()=> props.deleteTask(props.id) }> Delete <span className="visually-hidden" >{props.name}</span> </button>
       </div>
       </div>)
	
	return( (isEditing) ? EditTemplate:viewTemplate)
}