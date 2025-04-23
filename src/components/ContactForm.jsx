import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function ContactForm() {
      const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile:"",
        feedback: "",
      });

      const resetForm =()=>{
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            mobile:"",
            feedback: "",
          });
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    const handleSubmit = async(e) => {
        try{
        e.preventDefault();
        console.log("Submitted:", formData);
        const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSc4Ej0fvs0kCb0c-VkEi_eDiTEnklXYOGzCeRLJc66qfZtaLg/formResponse';

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.688935243', formData.firstname);
    formDataToSubmit.append('entry.956124596', formData.lastname);
    formDataToSubmit.append('entry.1064562381', formData.email);
    formDataToSubmit.append('entry.1466518805', formData.mobile);
    formDataToSubmit.append('entry.1213660599', formData.feedback);

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors', // This is required
      body: formDataToSubmit,
    })
      .then(() => {
        toast('Your message send successfully', {
            icon: '✅️',
          });
    resetForm();
      })
      .catch((err) => {
        toast('somthing went wrong', {
            icon: '❌',
          });
        console.error(err);
      });
        }
        catch(e){
          console.log(e);
        }
      };
  return (
    <div className='bg-base-100 p-5 rounded-lg'>
        <h2 className='text-lg md:text-2xl '>Get in Touch</h2>
        <p className='my-2 opacity-70 text-sm md:text-base'>You can reach us anytime</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-3'>
        <input
          type="text"
          placeholder="Full Name"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
        />
          <input
          type="tel"
          placeholder="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="input input-bordered w-full input-sm md:input-md"
          required
        />
        <textarea
          placeholder="Your wishes..."
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="textarea textarea-bordered w-full input-sm md:input-md"
          required
        />
        <button type="submit" className="btn btn-primary w-full  text-white btn-sm md:btn-md">
          Submit
        </button>
        </form>
    </div>
  )
}
