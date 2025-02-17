import React, { useState } from 'react';
import './Contacts.css'; 
import Buttons from '../components/buttons/Buttons';
import Navbar from '../components/Navbar'

function Contacts() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi gestire l'invio del form
    console.log('Form submitted:', formData);
  };

  return (
    <>
        <Navbar />
        <div className="contacts-container">
          <h1>Contact Us</h1>
          <p>Puoi contattarci compilando il modulo qui sotto:</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="message">Messaggio:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <Buttons type="input">Submit!</Buttons>
          </form>
        </div>
    </>
  )
}

export default Contacts