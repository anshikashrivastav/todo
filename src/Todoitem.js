import React from "react"

function Todoitem(props)
{
   return(
   	<div>
   	<input type="checkbox"
   	checked={props.item.completed}
   	onClick={()=>props.handleChange(props.item.id)}/>
   	<p> {props.item.text}</p>
   	</div>
   	)
}

export default Todoitem