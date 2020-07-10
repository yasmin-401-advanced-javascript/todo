import React , { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { ToggleContext } from '../../context/toggleShow';
import { PaginationContext }  from '../../context/paginations'
import './list.scss';
function TodoList (props){
  const toggleContext = useContext(ToggleContext);
  const pagination = useContext(PaginationContext);
  return (
  
    <ListGroup>
    {pagination.currentItem.map(item => (
      <Card
                className={`complete-${item.complete} complete-${item.complete}-${toggleContext.status} card`}
                key={item._id} 
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