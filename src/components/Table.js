import React, { useState } from 'react';

const Table = ({blogs,handleDelete,handleEdit}) => {
    
  return <>
<div className='text-center'>
    <h2>List of Blogs</h2>
</div>
<table class="table  table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    {blogs.map((blog)=>{
       return <>
       <tr key={blog.cardId}>
        <td>{blog.title}</td>
        <td>{blog.description}</td>
        <td>
            <button 
            className='btn btn-danger'
            onClick={()=>handleDelete(blog.cardId)}
            >
            Delete
            </button>
        </td>
        <td>
            <button 
            className='btn btn-success'
            onClick={()=>handleEdit(blog.cardId,blog.title,blog.description)}
            // onClick={()=>setIsModalOpen(!isModalOpen)}
            // onClick={()=>console.log("working")}
            >
            Edit
            </button>
        </td>
      </tr>
       </>
    })}
  </tbody>
</table>
      
  </>;
};

export default Table;
