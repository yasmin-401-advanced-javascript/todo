import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './list.scss';
function TodoList (props){
  console.log(props.list , 'list')
  return (
  
    <ListGroup>
    {props.list.map(item => (
      <Card
                className={`complete-${item.complete.toString()}`}
                key={item._id} className="card"
              >
                <Card.Header>
                  <div className="header">
                <Badge variant="success" className={`status-${item.complete}`}>{item.complete}</Badge>
                {' '} {item.assignee}
                </div>
                <Button variant="light" className='delete' onClick={() => props.handleDelete(item._id)}>
                X</Button></Card.Header>
                <Card.Text onClick={() => props.handleComplete(item._id)}  >
                <span className="text" className={`click-${item.complete}`}>  {item.text} </span>
                  <span className="dif"> difficulty: {item.difficulty }</span>
                </Card.Text>
                
               
              </Card>
))}
 
 </ListGroup>
     );

}

export default TodoList;