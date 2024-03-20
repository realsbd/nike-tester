import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyFooter from '../components/Footer';
const About = () => {
  useEffect(() => {
    AOS.init({
     duration: 4000, })
 }, [])
  return (
    <>
<div className="whole1 p-3 flex flex-wrap text-black bg-cover bg-center " style={{ backgroundImage: "url('')" }}>
    <div>
        <h1 className="text-3xl font-bold p-2 mt-20">About Us</h1>
        <h1 className="p-2" data-aos="fade-up" data-aos-duration="1000">
            Your ally in achieving ambition <br />
            beyond borders
        </h1>
        <p className="p-2" data-aos="fade-up" data-aos-duration="1000">
            We understand that with global ambition, comes global challenges, and
            we are <br />
            here to bridge the gap by offering seamless cross-border financial
            services. <br />
            Consider us your friendly digital guide to all things finance, helping
            you make the most of your money.
        </p>
    </div>
    <div>
        <img className='rounded-xl mt-20' src="https://i.pinimg.com/564x/53/f6/f3/53f6f33e968d9f75aeaa8e8f81ef9221.jpg" alt="" style={{width:'500px', height:'60vh'}} />
    </div>
</div>




      <div className=" container p-5 bg-white text-gray-800"> 
        <div className="">
        <div>
        <h1 className="text-3xl font-bold p-2" data-aos="fade-up" data-aos-duration="1000">About Us</h1>
        <p className="p-2 " data-aos="fade-up" data-aos-duration="1000">
            Welcome to [Your Company Name], your trusted partner in product testing and market research. 
            As a Tester with us, you have the opportunity to get paid for carrying out fiscal market research 
            and submitting sample reports on the quality of consumer products and services, including shoes, 
            clothes, and various accessories.
          
        </p>
        <h2 className="font-bold text-xl p-2">Our Goal:</h2>
        <p className="p-2" data-aos="fade-up" data-aos-duration="1000">
            Our goal is to evaluate the efficiency of the human resources of various retail networks across 
            the U.S., including the Nike Store, CVS, and Walmart, with minimal supervision. Your role as a 
            Tester involves walking into these outlets and carrying out your assignments as a normal customer 
            would, without hinting at the fact that you're a secret shopper/surveyor.
        </p>
        <h2 className="font-bold text-xl p-2" data-aos="fade-up" data-aos-duration="1000">Salary & Commissions:</h2>
        <p className="p-2">
            As a Tester, you earn $300 for each completed job, plus free Nike products. You will receive at 
            least 2 surveys per week, providing ample opportunities to earn and contribute valuable feedback.
        </p>
        <h2 className="font-bold text-xl p-2" data-aos="fade-up" data-aos-duration="1000">Assignment and Compensation:</h2>
        <p className="p-2">
            At [Your Company Name], we believe in the power of consumer feedback to drive product innovation 
            and improve customer experiences. That's why we compensate you for your time and participation 
            in our testing programs. By sharing your opinions, you play a crucial role in helping companies 
            develop new products or services and enhance existing ones.
        </p>
        <p className="p-2" data-aos="fade-up" data-aos-duration="1000">
            Only job seekers who follow our guidelines meticulously will be considered for Tester positions. 
            Get started today and become part of our community of valued Testers!
        </p>
        <p className="p-2" data-aos="fade-up" data-aos-duration="1000">
           <strong>Take Surveys!</strong> <br />
             You will start receiving surveys instantly, and you will have access to training 
            materials via email, text, and postal mail.
        </p>
    </div>        
        </div>
      <div className="flex justify-center">
  <button className='bg-green-400 p-5 rounded-xl text-white w-52 font-bold'>Apply Now</button>
</div>
      </div>
     <MyFooter/>
    </>
  )
}

export default About;
