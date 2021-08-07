import React,{useState} from 'react'



 function Form(props){
    const [name, setName]= useState('');

    function handleSubmit(e){
    e.preventDefault();
    if(name !==''){
        props.add(name);
    setName('');
        }
    }
 function handleChange(e){
    setName(e.target.value)
 }
	return(<form onSubmit={handleSubmit}>
    
    <label htmlFor='listField' className='input-label'>
    what needs to be done?</label>
    
    <input id='listField' type='text' className="mb-3" value={name} autoComplete='off' onChange={handleChange}/>
    <button className='btn btn-success msb-3'>Add</button>
    </form>);

}
export default Form;