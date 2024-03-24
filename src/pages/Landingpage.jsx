import React from 'react';
import Accodion from '../components/Accodion';
import Karousel from '../components/Carousel';
import MyFooter from '../components/Footer';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <>

<div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://i.pinimg.com/564x/b8/c6/38/b8c6385fa1ec61bf8f26172f8d5f65e0.jpg')"}}>
<div className="text-center p-5 bg-black bg-opacity-50 mt-20 backdrop-filter backdrop-blur-lg rounded-xl w-80">
  <h1 className="text-3xl font-bold text-white">
    Get the Green Light!
  </h1>
  <p className="text-white">
    Join the Nike Product Tester Program and be the first to try out our latest innovations. <br />
    Help shape the future of athletic footwear by providing valuable feedback on our products.
  </p>
  <Link to={'/apply'}>
  <a href="#" className="bg-white p-5 hover:bg-red-600 hover:text-emerald-100 text-black font-bold rounded mt-4 inline-block">Apply to be a Tester</a>
  </Link>
</div>

</div>
    <div> 
    </div>
    <Accodion/>
    <Karousel/>
    <div className='mt-4 mx-14'>
   <div className='w-full h-0 bg-black border border-black'></div>
   <p className='mt-14 mb-10'>
    <span className='text-blue-400 font-bold'>Nike Product Testing </span> usually takes 1 to 3 weeks for you to receive a response from the program coordinators. If accepted, you will be notified via email and Nike will periodically send invitations to participate in one of their product testings. Testers are asked to wear the shoes and give their input on how the product feels, acts and performs.
   </p>
    </div>
    
    <MyFooter/>
    </>
  );
};

export default Landingpage;
