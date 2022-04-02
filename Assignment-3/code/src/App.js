import React from 'react';
import logo from './logo.svg';
import './App.css';
var arrow="<"
var arrow1='>'
const object = {
    Name: 'Alan Ford',
    EmployeeID: '00005152',
    Appointment: '09:00 (24-05-2016)',
    Email: 'alan.form@email.nl',
    Phone: '+31123456789'
}
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <header>
      <p className='ar1'>{arrow}</p>
      <p><b>{object.Name}</b><br></br><span>{object.EmployeeID}</span></p>
      <button type="button">Print</button>
    </header>
    <div className="customer-info">
      <p><b>Appointment </b>{object.Appointment}</p>
      <p><b>Email: </b>{object.Email}</p>
      <p><b>Phone </b>{object.Phone}</p> 
    </div>
    <div className="order-info">
    <p><b>Status</b><br></br>
      <ul>
        <li>In Progress</li>
      </ul>
    </p>
    <p><b>Door</b><br></br>
      Mark
    </p>
    <p className='time'><b>Time</b><br></br>
      10:30 
      <span>(25-05-2016)</span>
    </p>
    </div>
    <div className="product-list">
      <div className='img1'>
        <div className='orange'></div>
      <img src="https://www.w3schools.com/howto/img_avatar.png"/>
      </div>
      <div className='content'>
      <h2>Boltaart Bosbessen</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        </div>
        <p className='ar'>{arrow1}</p>
    </div>
    </div>
  );
}
export default App;


