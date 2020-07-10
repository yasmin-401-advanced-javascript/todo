import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



function TodoList (props){
  return (
  
    <ListGroup>
    {props.list.map(item => (
     <ListGroup.Item className={`complete-${item.complete.toString()}`}
     key={item._id} variant="success" action className="list">
       <span onClick={() => props.handleComplete(item._id)}>
          {item.text} - {item.assignee}
           </span>  
     </ListGroup.Item>
))}
 
 </ListGroup>
     );

}

export default TodoList;