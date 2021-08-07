import React from 'react'


export default function FilterButton(props){
		let classValue;
		if (props.isPressed){
			classValue = ' btn mb-2 active'
		}else{classValue='btn btn__filter mb-2 '}
			
	
	return(
		<div className='filter-button mrl-1'>
		<button 
		className= {classValue}
		type='button' onClick={	() => props.setFilter(props.name)}>
		<span className='visually-hidden'>Show</span> 
		<span>{props.name}</span> 
		<span className='visually-hidden'>Show</span>
		</button>

		
		</div>
		);
}