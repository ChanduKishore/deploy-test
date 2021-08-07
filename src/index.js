import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Data =[
{id:"todo-0", name:"eat", completed:true},
{id:"todo-1", name:"sleep", completed:false},
{id:"todo-2", name:"Repeat", completed:false},]



ReactDOM.render(
  <React.StrictMode>
    <App tasks={Data} />
  </React.StrictMode>,
  document.getElementById('root')
);
