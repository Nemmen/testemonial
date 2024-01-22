import React from 'react';
import './App.css';
import Testimonials from './components/Testimonal';
import { review } from './review';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          Our Testimonials
        </h1>
        <div className='bg-violet-400 h-[4px] w[1/5] mt-1'></div>
        <Testimonials Review ={review}/>
      </div>
    </div>
    </div>
  );
}

export default App;
