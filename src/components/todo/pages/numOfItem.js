import React, { useContext } from 'react';
import { PaginationContext }  from '../../context/paginations'
// import './todo.scss';
function ChengeNumberOfPages  () {

const pagination = useContext(PaginationContext);
const changHandler = (e) =>{
    pagination.setItem(e.target.value)
}
  
    return (
      <>
       <select onChange={changHandler}> 
       <option>items per page</option>
           <option value='3'>3</option>
           <option value='5'>5</option>
           <option value='7'>7</option>
       </select>
      </>
    );
  
}
export default ChengeNumberOfPages;