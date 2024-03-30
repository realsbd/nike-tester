import axios from 'axios';
import React, { useState } from 'react';

const ContactForm = () => {
  const [userName, setuserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')

  // let allUserDetails = { userName, userEmail, message };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(allUserDetails);
  axios.post('https://walletcon.intedhub.com/sendmail.php', {
  userName: userName,
  userEmail: userEmail,
  message: message
})
.then((response) => {
  console.log(response);
  console.log('Form submission success:', response.data);
})
.catch((error) => {
  console.error('Form submission error:', error);
  // Show an error message
});
    // Send the form data to the PHP form handler
    // fetch('https://walletcon.intedhub.com/sendmail.php', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.text())
    //   .then((data) => {
    //     console.log('Form submission success:', data);
    //     // Reset the form data or show a success message
    //     setFormData({ name: '', email: '', message: '' });
    //   })
    //   .catch((error) => {
    //     console.error('Form submission error:', error);
    //     // Show an error message
    //   });
  };

  return (
    <>

    <div className="mt-0 mb-20">
    f
    </div>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userName}
          onChange={(e)=> setuserName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userEmail}
          onChange={(e)=> setUserEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
          required
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default ContactForm;
















// import axios from 'axios';
// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//      axios.post('https://walletcon.intedhub.com/sendmail.php', formData)
//     .then((response) => {
//       console.log(response);
//       console.log('Form submission success:', response.data);
//       // Reset the form data or show a success message
//       setFormData({ name: '', email: '', message: '' });
//     })
//     .catch((error) => {
//       console.log(error);     
//        console.error('Form submission error:', error);
//       // Show an error message
//     });


//     // Send the form data to the PHP form handler
//     // fetch('https://walletcon.intedhub.com/sendmail.php', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(formData),
//     // })
//     //   .then((response) => response.text())
//     //   .then((data) => {
//     //     console.log(data);
//     //     console.log('Form submission success:', data);
//     //     // Reset the form data or show a success message
//     //     setFormData({ name: '', email: '', message: '' });
//     //   })
//     //   .catch((error) => {
//     //     console.error('Form submission error:', error);
//     //     // Show an error message
//     //   });
//   };

//   return (
//     <>
   
//     <div className="mt-0 mb-20">
//     f
//     </div>
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Message:
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//     </>
//   );
// };

// export default ContactForm;