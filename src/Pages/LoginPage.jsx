import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from '../features/Login'
import './LoginPage.css';


function LoginPage() {
    const [formData, setFormData] = useState({
        name: 'Elia',
        password: '00001'
    });
    const [error, setError] = useState('');

    {/* usage of useNavigate */}
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === UserData.userName && formData.password === UserData.password) {
            console.log('Login successful!');
            setError('');
            navigate('/Search4Recipies'); 
        } else {
            setError('Invalid username or password');
            navigate('/ErrorPage')
        }
    };
    

    return (
        <>
            <h1 className='main-title'>Welcome to VeggieVibes</h1>
            <main className='main-wrapper'>
                <section className='login-section'>
                    <h2 className='secondary-title'>Fill in the fields to log in!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-section'>
                            <div className='input-fields'>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder='Your name' 
                                    className='input-name' 
                                    value={formData.name}
                                    onChange={handleChange}  
                                    required 
                                />
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder='Your password' 
                                    className='input-pswd' 
                                    value={formData.password}
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <button className='btn'>Submit</button>
                            {error && <p className="error-message">{error}</p>}
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default LoginPage; 