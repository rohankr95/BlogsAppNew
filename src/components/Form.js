import React from 'react';

const Form = ({title,description,setTitle,setDescription,handleSubmit}) => {
  return <>
  <div className='text-center my-3'>
  <h3>Add blogs</h3>
  </div>
  <div 
  className='text-center my-3' 
  style={{display: 'flex',
  justifyContent: 'center',
  border: '1px solid black'
  }}>
    
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div class="mb-3">
            <label for="blogTitle" class="form-label">Title</label>
            <input 
            type="text" 
            class="form-control" 
            id="blogTitle" 
            value={title}  
            onChange={(e)=>setTitle(e.target.value)}
            />
        </div>
        <div class="mb-3">
            <label for="blogDescription" class="form-label">Description</label>
            <input 
            type="text" 
            class="form-control" 
            id="blogDescription" 
            value={description}  
            onChange={(e)=>setDescription(e.target.value)} 
            />
        </div>
        <button 
        type="submit" 
        class="btn btn-primary my-2"
        >
          Add Blog
        </button>
        </form>
  </div>
      
  </>;
};

export default Form;
