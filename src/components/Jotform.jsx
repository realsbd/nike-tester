import { Label, TextInput } from 'flowbite-react'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { FaPhoneAlt } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaStore } from "react-icons/fa";





const Adlogin = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('default_service', 'template_kcl3606', form.current, '2abvf92yVnzhCmvw0')
      .then((result) => {
            console.log(result);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail} className=''>
      <br />
      <br />
      <br />
         <div className="max-w-md mx-auto   p-5 rounded">
         <div className="mb-2 block">
          <Label htmlFor="email4" value="Enter First Name" />
        </div>
        <TextInput
          type="text"
          rightIcon={MdOutlineDriveFileRenameOutline}
          id="first_name" name="first_name"
          placeholder="Clinton"
          required
        />


<div className="mb-2 block">
          <Label htmlFor="email4" value="Enter Last Name" />
        </div>
        <TextInput
          type="text"
          rightIcon={MdOutlineDriveFileRenameOutline}
          id="last_name" name="last_name" 
          placeholder="John "
          required
        />

<div className="mb-2 block">
          <Label htmlFor="email4" value="Enter Email" />
        </div>
        <TextInput
          type="text"
          rightIcon={MdOutlineDriveFileRenameOutline}
          id="user_email" name="user_email"
          placeholder="john@gmail.com"
          required
        />

<div className="mb-2 block">
          <Label htmlFor="email4" value="Enter City" />
        </div>
        <TextInput
          type="text"
          rightIcon={MdOutlineDriveFileRenameOutline}
          id="city" name="city"
          placeholder="NYC"
          required
        />

<div className="mb-2 block">
          <Label htmlFor="email4" value="Enter Address" />
        </div>
        <TextInput
          type="text"
          rightIcon={MdOutlineDriveFileRenameOutline}
          id="address" name="address" 
          placeholder="block 25 new jersey"
          required
        />

        <div className="mb-2 block">
          <Label htmlFor="email4" value="Your Age" />
        </div>
        <TextInput
          type="date"
         id='user_age' name='user_age'
          placeholder=""
          required
        />

        
<div className="mb-2 block">
          <Label htmlFor="email4" value="Phone Number" />
        </div>
        <TextInput
          type="text"
          id="phone" name="phone"
          rightIcon={FaPhoneAlt}
          placeholder=""
          required
        />

        
<div className="mb-2 block">
          <Label htmlFor="email4" value="Nearest Nike Store" />
        </div>
        <TextInput
          type="text"
         id='nike_store' name='nike_store'
          rightIcon={FaStoreAlt}
          placeholder=""
          required
        />

<div className="mb-2 block">
          <Label htmlFor="email4" value="Nearest Walmart/CVs" />
        </div>
        <TextInput
          type="text"
         id='walmart_store'  
          name='walmart_store'
          rightIcon={ FaStore}
          placeholder=""
          required
        />
         

<button
 type="submit" 
    className="text-white w-80 mt-3 p-3 font-bold bg-red-400 hover:bg-orange-500 rounded w-100"
  >
    Apply
  </button>

  <br />
         </div>
         </form>
    </>
  )
}

export default Adlogin