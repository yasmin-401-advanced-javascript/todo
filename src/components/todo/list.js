import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './list.scss';
function TodoList (props){
  return (
  
    <ListGroup>
    {props.list.map(item => (
      <Card
                className={`complete-${item.complete.toString()}`}
                key={item._id} className="card"
              >
                <Card.Header>
                <Badge variant="success">Pending</Badge>
                {' '}{item.complete}  {item.assignee}
                <Button variant="light" className='delete' onClick={() => props.handleDelete(item._id)}>
                X</Button></Card.Header>
                <Card.Text onClick={() => props.handleComplete(item._id)} >
                  {item.text}  {item.difficulty }
                </Card.Text>
                
               
              </Card>
))}
 
 </ListGroup>
     );

}

export default TodoList;