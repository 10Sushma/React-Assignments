import React from 'react'
import { useState,useEffect } from 'react';
import Head from './Head';
import Postcard from './Postcard';

export default function Data() {

  const [items, setItems] = useState([]);
    useEffect(() => {
        
        fetch("http://localhost:3004/user")
          .then(res => res.json())//usisng then keyword we convert into json data
          .then((result) => {
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
