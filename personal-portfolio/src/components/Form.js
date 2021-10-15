import React, { useState } from 'react';
import ContactForm from './ContactForm';
import {Link} from 'react-router-dom';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
          <ContactForm submitForm={submitForm} />
          <Link to='/Personal-Portfolio'>
                <button className="btn-Home">Home</button>
                </Link>
      </div>
    </>
  );
};

export default Form;