
import React,{useEffect, useState} from 'react';
import './app.css' ;
import Todo from './components/todo';
import {nanoid} from 'nanoid';
import Form from './components/form';
import FilterButton from './components/filterButton';

const FILTER_MAP ={
   All:() => true,
   Active:task => !task.completed,
   Completed:task => task.completed
}

const FILTER_NAMES =Object.keys(FILTER_MAP);

function App(props) {
// local storage retrival
useEffect(() => {
   const json = localStorage.getItem('tasks');
   const savedTasks = JSON.parse(json);
   if(savedTasks){
      setTasks(savedTasks)
   }
   
}, [props.tasks])


 const [filter, setFilter]=useState('All');
 const [tasks, setTasks] = useState(props.tasks);

 const filterList = FILTER_NAMES.map(name => {
   return <FilterButton 
               key={name}
               name={name}
               isPressed ={name === filter}
               setFilter ={setFilter}
                />
 })

// local data storage
useEffect(() =>{
   const json = JSON.stringify(tasks);
   localStorage.setItem('tasks', json);

},[tasks])



function editTask(id, newName){
   const updatedTasks = tasks.map(task =>{

      if(task.id === id){
         return {...task, name:newName};
      }
      return task;
   });
   setTasks(updatedTasks)
}

function deleteTask(id){
   const remainingTasks = tasks.filter(task => id !==task.id)
   setTasks(remainingTasks)
}

 function toggleTaskCompleted(id){
   const updatedTasks = tasks.map(task =>{

      if(id === task.id){

         return {...task, completed:!task.completed};
         
      }
      return(task);

   });

   setTasks(updatedTasks);
   console.log(updatedTasks)
 }

 function addTask(name){
   const newTask = {id:'todo-'+ nanoid(), name:name, completed:false};
   setTasks([...tasks, newTask])

   }

   const taskList = tasks.filter(FILTER_MAP[filter]).map(task => {
    return(<Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask = {deleteTask}
      editTask = {editTask}/>)
   });
   
   const noOfTasks= tasks.filter(FILTER_MAP['Active']).length
   const taskNoun = (noOfTasks !==1 ) ? 'tasks':'task';
   const headingTasks = `${noOfTasks} ${taskNoun} remaining`;

  return (
   <div className='todo-matic'>

    <h1 className='title'>TodoMatic </h1>
    <Form add={addTask} />
    <div className="stack">
    {filterList}
    </div>
    
    <h2 className='list-heading'> {headingTasks} </h2>
   
    {taskList}
       </div>
);
}

export default App;
