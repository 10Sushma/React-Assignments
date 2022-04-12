import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

export default function Layout() {
  return (
    <>
  <div className='home'>
    <div className='image'>
        <img src='./images/layout.jpg' alt='image' width={700} height={500}/>
    </div>
    <div className='btn'>
        <h1 className='h12'> 10x Team</h1>
      <button>  <Link className='link' to='/postview' >Enter</Link></button>
        {/* <button type='submit'><a href="http://localhost:3001/">Enter</a></button> */}
    </div>
  </div>
  
    </>
  )
}
