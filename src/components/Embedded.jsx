import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'


const Embedded = () => {
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
      <div>W</div>
      <div className="">
      <form ref={form} onSubmit={sendEmail} className='mt-20 w-full max-w-lg'>
        <div className="">
          <div>
            <label className=" text-gray-700" htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" className="mt-1 p-3  w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className=" text-gray-700" htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>

        <div className="">
          <div>
            <label className=" text-gray-700" htmlFor="user_name">Middle Name</label>
            <input type="text" id="user_middlename" name="user_middlename" placeholder="optional" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className=" text-gray-700" htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>


        <div>
          <label className="h text-gray-700" htmlFor="address">Address</label>
          <input type="text" id="address" name="address" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="block text-gray-700" htmlFor="city">City</label>
            <input type="text" id="city" name="city" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="state">State</label>
            <input type="text" id="state" name="state" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div className="mt-6">
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Send</button>
        </div>
      </form>
    </div>

        
      </>
    );
};










  // useEffect(() => {
  //   // Script embedding logic goes here
  //   const script = document.createElement('script');
  //   script.src = 'https://form.jotform.com/jsform/240826909263260';
  //   script.type = 'text/javascript';
  //   document.body.appendChild(script);

  //   // Clean up the script on component unmount
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  // return <div id="jotform-embed"></div>;


export default Embedded;