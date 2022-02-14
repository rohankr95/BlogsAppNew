import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table';
import Modal from './components/Modal';
import { useState } from 'react';
import BlogData from './BlogData';
import { v4 as uuidv4 } from 'uuid';





function App() {
  const [blogs,setBlogs] = useState(BlogData);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [originalTitle,setOriginalTitle] = useState('');
  const [originalDescription,setOriginalDescription]= useState('');

  const [editTitle,setEditTitle] = useState('');
  const [editDescription,setEditDescription]= useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    setBlogs([...blogs,
      {
        title:title,
        description:description,
        cardId:uuidv4()
      }]);
      setTitle('');
      setDescription('');
  }

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter((blog)=>{
      return blog.cardId != id;
    })
    setBlogs(newBlogs);
  }

  const handleEdit=(id,title,desc)=>{
    setIsModalOpen(true);
    setEditTitle(title);
    setOriginalTitle(title);
    setEditDescription(desc);
    setOriginalDescription(desc);

  }

  const handleEditSubmit=(e)=>{
    e.preventDefault();
   const newBlogs= blogs.filter((blog)=>{
      return(blog.title!==originalTitle && blog.description!== originalDescription)
    })
    setBlogs([...newBlogs,
      {
        title:editTitle,
        description:editDescription,
        cardId:uuidv4()
      }]);

      setIsModalOpen(!isModalOpen)

  }
  return (
    <div className="App">
      <Navbar />
      {isModalOpen && 
      <Modal 
      isModalOpen={isModalOpen} 
      setIsModalOpen={setIsModalOpen}
      editTitle={editTitle}
      editDescription={editDescription}
      setEditTitle={setEditTitle}
      setEditDescription={setEditDescription}
      handleEditSubmit={handleEditSubmit} 
      />}
      <Form 
      title={title} 
      description={description} 
      setTitle={setTitle} 
      setDescription={setDescription} 
      handleSubmit={handleSubmit}
      />
      <Table 
      blogs={blogs} 
      setBlogs={setBlogs}
      handleDelete={handleDelete}
      handleEdit={handleEdit} 
      />
    </div>
  );
}

export default App;
