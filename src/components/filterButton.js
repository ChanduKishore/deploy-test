import React from 'react'


export default function FilterButton(props){

	return(
		<div className='filter-button mrl-1'>
		<button 
		className='btn btn__filter mb-2 ' 
		type='button' onClick={() => props.setFilter(props.name)}>
		<span className='visually-hidden'>Show</span> 
		<span>{props.name}</span> 
		<span className='visually-hidden'>Show</span>
		</button>

		
		</div>
		);
}