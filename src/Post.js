import React, { useState } from 'react';
import axios from 'axios';

function Post() {



  const [formData, setFormData] = useState({
    id: '',
    name: '',
    orders: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await axios.post('http://localhost:8080/post', formData);
      console.log(response.data); 
      setFormData({
        id: '',
        name: '',
        orders: '',
        quantity: ''
      });
    
  };

  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="id" placeholder="id" value={formData.id} onChange={handleChange} />
      <input name="name" placeholder="name" value={formData.name} onChange={handleChange} />
      <input name="orders" placeholder="orders" value={formData.orders} onChange={handleChange} />
      <input name="quantity" placeholder="quantity" value={formData.quantity} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>Submit</button>
      {showMessage && <p>Posted</p>}

    </form>
  );
}

export default Post;