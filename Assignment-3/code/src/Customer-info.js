import React from 'react';
import './Customer-info.css'
export default function CustomerInfo(props) {
    const {object}=props
  return (
    <div className="customer-info">
      <p><b>Appointment </b>{object.Appointment}</p>
      <p><b>Email: </b>{object.Email}</p>
      <p><b>Phone </b>{object.Phone}</p> 
    </div>
  )
}
