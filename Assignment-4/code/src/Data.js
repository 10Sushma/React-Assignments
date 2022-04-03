import React from 'react'
import { useState,useEffect } from 'react';
import Head from './Head';
import Postcard from './Postcard';

export default function Data() {
// const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
    useEffect(() => {
        
        fetch("http://localhost:3004/user")
          .then(res => res.json())
          .then(
            (result) => {
            //   setIsLoaded(true);
              setItems(result);
            }
           
           
          )
      }, [])
    console.log(items)
     
      
    
  return (<>
      <div className='head'>
          <Head/>
      </div>
    <section className='card-section'>
    {items.map((cardDetails)=>(
      <Postcard cardDetails={cardDetails}/>
    ))}
</section>
</>   
  )
  }
