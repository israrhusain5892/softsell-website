
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = ({ref}) => {
  // Define state for formData
  const [formData, setFormData] = useState({ name: '', email: '', company: '', licenseType: '', message: '' });
  // Define state variable for errors 
  const [errors, setErrors] = useState({});


  

  const handleChange = (e) => {
    // extract the name and value from event e.taget
    const { name, value } = e.target;
    // update formdata taking prev  value and update new value.
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    //  validations of name , email and message
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // here we can post data to server
        console.log(formData);
        // to make better submission used setTimeoutr
        // form will submit after 3 second after clicking submit button
        setTimeout(()=>{
          toast.success("Form submitted successfully!");
           setFormData({ name: '', email: '', company: '', licenseType: '', message: '' })  // to make blank all fields after submission
        },1000)
      
       
     
      
    }
   
  };

  return (
    <section className="py-16" ref={ref}>
       <ToastContainer position='top-center' />
      <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8  p-8 form">
        <div className="mb-4">
          <label className="block" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            id="name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            id="email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            id="company"
          />
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="licenseType">License Type</label>
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            id="licenseType"
          >
            <option value="">Select License Type</option>
            <option value="Software">Software</option>
            <option value="Game">Game</option>
            <option value="OS">Operating System</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            id="message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Submit</button>
      </form>
     
    </section>
  );
};

export default ContactForm;
