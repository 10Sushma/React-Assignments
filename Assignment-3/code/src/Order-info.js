import React from 'react';
import './Oder-info.css';

export default function OrderInfo(props) {
    const {order}=props
  return (
    <div className="order-info">
    <p><b>Status</b><br></br>
      <ul>
        <li>{order.status}</li>
      </ul>
    </p>
    <p><b>Door</b><br></br>
      {order.door}
    </p>
    <p className='time'><b>Time</b><br></br>
    {order.time}
      
      <span>{order.date} </span>
    </p>
    </div>
  )
}
