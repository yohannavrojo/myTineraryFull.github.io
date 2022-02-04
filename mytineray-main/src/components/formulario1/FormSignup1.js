import React from 'react';
import validate from './validateInfo1';
import useForm from './useForm1';
import './Form1.css';
import { Link } from "react-router-dom";


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        SIGN UP
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>User</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter user'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='
            Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='confirm password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
        SIGN UP
        </button>
        <span className='form-input-login'>
        Do you already have an account? Enter  <Link to={"/Signin"}>here
                  
                
              </Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;