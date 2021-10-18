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
          <ContactForm submitForm={submitForm} />
          <hr class="line1"></hr>
          <Link to='/Personal-Portfolio'>
                <button className="btn-Home">Home</button>
                </Link>
    </>
  );
};

export default Form;