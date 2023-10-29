"use-client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can handle the form submission here, for example, by sending the data to a server.
    
    // Clear the form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='w-[100vw] lg:w-full'>
      <h2 className='text-4xl mb-10'>Contact Us</h2>
      <form onSubmit={handleSubmit} className='gap-6 flex flex-col m-auto  justify-end'>
        <div className='flex flex-col lg:flex-row gap-8 justify-between'>  
            <div className='lg:w-[47%]'>
                <input
                    type="text"
                    placeholder='First Name'
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className='border-b border-[#0a78b4] outline-none w-full'
                />
            </div>

            <div  className='lg:w-[47%]'>
                <input
                    type="text"
                    placeholder='Last Name'
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className='border-b border-[#0a78b4] outline-none w-full'
                />
            </div>
        </div>

        <div className='w-full mb-4'>
          <input
            type="email"
            placeholder='Email'
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='border-b border-[#0a78b4] w-full focus:border-b-[#0a78b4] outline-none'
          />
        </div>

        <div>
          <textarea
            id="message"
            placeholder='Message'
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='border-b border-[#0a78b4] w-full outline-none'
          />
        </div>

        <button type="submit" className='rounded-full bg-[#0a78b4] p-2 text-neutral-50'>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
