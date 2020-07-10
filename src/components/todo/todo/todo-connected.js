import React, { useEffect, useContext } from 'react';
import TodoForm from '../form/form.js';
import TodoList from '../list/list.js';
import useAjax from '../../hook/axios.js'
import './todo.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Pagination from '../pages/pageNumbers.js'
import ToggleHideShow from './toggleShow.js'
import PaginationContext from '../../context/paginations.js'
import ToggleShowProvider from '../../context/toggleShow.js';
import ChangeNumberOfPages from '../pages/numOfItem.js'

const ToDo = () => {
  const [list , _addItem , _toggleComplete , _getTodoItems ,deleteItem] = useAjax()
  useEffect(_getTodoItems, []);

  return (
    <>
    
    <Navbar bg="dark" variant="dark" className="navBar">
               <Nav className="mr-auto">
                    <h2>
                          To Do list Manager ({list.filter(item => item.complete === 'pending').length})
                    </h2>
               </Nav>
         </Navbar>
         

         <section className="todo">

<div className="form">
  <TodoForm handleSubmit={_addItem} />
</div>
<PaginationContext list={list}>
<div className="list">
          <ToggleShowProvider list={list}>
          <ToggleHideShow/>
          <ChangeNumberOfPages/>

  <TodoList
    handleComplete={_toggleComplete}
    handleDelete={deleteItem}
  />
            </ToggleShowProvider>
          <Pagination
        totalitems={list.length}
      />
   </div>
</PaginationContext>
</section>
      {/* <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={deleteItem}
          />
        </div>
      </section> */}
    </>
  );
};

export default ToDo;
