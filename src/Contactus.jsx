import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_is0fh28', 'template_l384ho4', form.current, {
        publicKey: 'EIvz0waaN4umVp2lz',
      })
      .then(
        () => {          
          console.log('SUCCESS!');
          toast.success("Message send Successfully")
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container d-flex  justify-content-center   mt-4">
        <ToastContainer position="top-right" />
        <div className="row">
            <div className="col-md-12 control p-5">
            <form ref={form} onSubmit={sendEmail}>
      <div>
        <label htmlFor="" className='mb-md-2 mt-md-2 label'>Your Name</label>
      <input type="text" name="from_name" className='form-control fm-width fa' />
      </div>
      <div>
        <label htmlFor="" className='mb-md-2 mt-md-2 label'>Email Address</label>
      <input type="email" name="from_email" className='form-control' />
      </div>
      <div>
        <label htmlFor="" className='mb-md-2 mt-md-2 label'>Subject</label>
      <textarea name="message" className='form-control fw' />
      </div>
      <div className='d-flex justify-content-center'>
      <input type="submit" value="Send Message" className='home1-btn mt-4' />
      </div>
    </form>
            </div>
        </div>
    </div>
  );
};