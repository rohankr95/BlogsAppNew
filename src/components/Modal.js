import React from 'react';
import './../Css/modal.css'

const Modal = ({isModalOpen,setIsModalOpen,editTitle,editDescription,setEditTitle,setEditDescription,handleEditSubmit}) => {
  return <>
     <div className={isModalOpen ? 'modal_container show-modal' : 'modal_container'}>
       <div className='modal-content'>
        <form onSubmit={(e)=>handleEditSubmit(e)} >
            <div className="form-group">
              <label htmlfor="Titletext">New Title</label>
              <input type="text" className="form-control" id="Titletext"  placeholder="Enter title" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}  />
            </div>
            <div class="form-group">
              <label htmlfor="description">New Description</label>
              <input type="text" className="form-control" id="description" placeholder=" Enter Description" value={editDescription} onChange={(e)=>setEditDescription(e.target.value)}  />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            <button type="button" className="btn btn-danger mx-2" onClick={()=> setIsModalOpen(!isModalOpen)}>Close</button>
          </form>
       </div>
     </div>
  </>;
};

export default Modal;
