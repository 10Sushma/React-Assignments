import React from 'react';
import './App.css';
import CustomerInfo from './Customer-info';
import OrderInfo from './Order-info';
import ProductList from './Product-list';
var arrow="<"
var arrow1='>'
const object = {
    Name: 'Alan Ford',
    EmployeeID: '00005152',
    Appointment: '09:00 (24-05-2016)',
    Email: 'alan.form@email.nl',
    Phone: '+31123456789'
}
const order={
  status:'In Progress',
  door:'Mark',
  time:'10:30' ,
  date:'(25-05-2016)'

}
const product={
      image:"https://www.w3schools.com/howto/img_avatar.png",
      content:'Boltaart Bosbessen',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
    <CustomerInfo object={object}/>
    <OrderInfo order={order}/>
    <ProductList product={product}/>
       
    </div>
  );
}
export default App;


