import React, { useState } from 'react';
import './form.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../hook/form-hook.js'
// function TodoForm(props){
//   const [item,setItem] = useState({});

//   const handleInputChange = e => {
//       setItem( {...item, [e.target.name]: e.target.value  });
      
//   };

//   const  handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     props.handleSubmit(item);
//     // const item1 = {};
//     setItem({});
//   };
function TodoForm(props){
  // const [item,setItem] = useState({});
  const [item, handleInputChange, handleSubmit] = useForm(handleForm);
  function handleForm(item) {
    props.handleSubmit(item)
  }
    return (
      <>
      <div className="form">
        <h3>Add Item</h3>

        <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>To Do Item</Form.Label>
    <Form.Control  name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Assigned To</Form.Label>
    <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
  </Form.Group>

  <Form.Group controlId="formBasicRange">
    <Form.Label>Range</Form.Label>
    <Form.Control type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
  </Form.Group>

  <Button variant="primary" type="submit" className="button">
  Add Item
  </Button>
</Form>
</div>
        {/* <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>

 
            {/* <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} /> */}
          {/* </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <button>Add Item</button>
        </form> */}

        {/* 
        
        // */} 
      </>
    );


}
export default TodoForm;