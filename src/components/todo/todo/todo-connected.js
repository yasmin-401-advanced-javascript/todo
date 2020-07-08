import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax'
import './todo.scss';



const ToDo = () => {
  const [list , _addItem , _toggleComplete , _getTodoItems , deleteItem] = useAjax()
  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

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
      </section>
    </>
  );
};

export default ToDo;
