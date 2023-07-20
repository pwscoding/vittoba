import React from 'react'
import Testimonial from '../homepage/Testimonial'
import aboutimg from "../../../src/images/main1.jpg"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Breadcrumb from '../breadcrumb/Breadcrumb';

const Aboutme = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='bg-slate-100'>
      <div><Breadcrumb title="About" /></div>
{/* 
      <div className=' text-3xl lg:text-5xl font-bold px-2 py-2 rounded-md mt-10 mb-2
        text-center pt-4 lg:mt-4 '>ABOUT US</div> */}
      <div className='flex lg:flex-row flex-col justify-around mt-10'>
        <div className=' rounded-3xl w-[90%] mx-auto lg:w-[35%]  h-full  overflow-hidden  my-auto' >
        <div className=' ' >
        <img src={aboutimg} alt="about-image" className='object-cover  ' />  
        </div>
          
        </div>
        <div className=' w-[90%] mx-auto lg:w-[55%]'>
          
          <h1 className='text-xl font-bold my-4'>Welcome to Vittoba - Your Trusted Printing Solutions Provider!</h1>
          <p className='text-sm xl:text-[15px] tracking-wider leading-6'>At Vittoba, we are dedicated to providing innovative printing solutions that empower businesses and individuals to bring their ideas to life. With our state-of-the-art printers and comprehensive services, we have been serving customers worldwide since our establishment.</p>
          <p className='text-xl font-bold my-4'>Who We Are:</p>
          <p className='text-sm xl:text-[15px] tracking-wider leading-6'>
            Vittoba is a leading printer company committed to delivering high-quality printing products and services. We combine cutting-edge technology, exceptional craftsmanship, and a passion for excellence to meet the diverse printing needs of our customers. Our team of skilled professionals strives to provide personalized solutions that drive productivity, efficiency, and creativity.</p>
        </div>
      </div>
      <div>
        
        <div className='text-xl w-[90%] lg:w-[90%] mx-auto'>
        <p className='text-xl lg:text-2xl font-bold my-4 mt-10  lg:mt-12'>Why Choose Vittoba:</p>
          <ul className=' tracking-wider  '>
            <li className='mb-4  text-sm xl:text-[15px]'><span className='font-bold  text-base lg:text-lg '>Exceptional Print Quality:</span> Our printers are designed to deliver outstanding print results, ensuring your documents, photographs, or creative projects look their best.</li>
            <li className='mb-4 text-sm xl:text-[15px]'><span className='font-bold text-base lg:text-lg'>Innovative Technology:</span> We stay at the forefront of printing advancements, offering the latest technologies and features that enhance productivity and creativity.</li>
            <li className='mb-4 text-sm xl:text-[15px]'><span className='font-bold text-base lg:text-lg'>Reliable Performance:</span> Our printers are built to withstand heavy workloads and deliver consistent results, providing you with peace of mind and uninterrupted printing.</li>
            <li className='mb-4 text-sm xl:text-[15px]'><span className='font-bold text-base lg:text-lg'>Outstanding Customer Support:</span> We are committed to delivering a superior customer experience. Our dedicated support team is always ready to assist you, answer your queries, and provide prompt solutions.</li>
            <li className='mb-4 text-sm xl:text-[15px]'><span className='font-bold text-base lg:text-lg'>Sustainability:</span> We are mindful of our environmental impact. Vittoba promotes eco-friendly printing practices, including energy-efficient printers, recycling programs, and environmentally conscious materials.</li>
          </ul>








        </div>
      </div>
      {/* ************************************COUNTUP***************************************** */}
      <div className="text-center  mt-8 md:mt-12  py-10 p-6 bg-slate-200">
      <h1 className=" text-2xl md:text-4xl font-bold">NUMBER SPEAKERS.</h1>
      <div className="flex justify-between md:justify-around mt-8 md:mt-12">
        <div ref={ref}>
          <h1>{inView && <CountUp className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-slate-800" end={10} duration={4} />}<span className=" ml-0.5 md:ml-2 text-2xl sm:text-3xl md:text-5xl lg:text-7xl ">+</span> </h1>
          <p className='text-[.6rem] md:text-base lg:text-lg mt-2'>Years of Experience</p>
        </div>
        <div ref={ref}>
          <h1>{inView && <CountUp className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-slate-800" end={2000} duration={3} />}<span className=" ml-0.5 md:ml-2 text-2xl sm:text-3xl md:text-5xl lg:text-7xl ">+</span></h1>
          <p className='text-[.6rem] md:text-base lg:text-lg mt-2'>Printers Sold</p>
        </div>
        <div ref={ref}>
          <h1>{inView && <CountUp className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-slate-800" end={5000} duration={3} />}<span className=" ml-0.5 md:ml-2 text-2xl sm:text-3xl md:text-5xl lg:text-7xl ">+</span></h1>
          <p className='text-[.6rem] md:text-base lg:text-lg mt-2'>Satisfied Customers</p>
        </div>
      </div>
    </div>
      {/* ********************************TESTIMONIAL******************************************* */}
      <div className="w-full overflow-hidden">
        <Testimonial />
      </div>
    </div>
  )
}

export default Aboutme