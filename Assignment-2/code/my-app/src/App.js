import logo from './logo.svg';
import './App.css';




function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <img className ="img" alt="face" src={employee.profileImg}/>
    
    <h1 className= "name">{employee.name}</h1>
    
    <p className="title">Location</p>
    <p className="content">{employee.location}</p>
    <p className="title">Blood Group</p>
    <p className="content">{employee.bloodGroup}</p>
    <p className="title">Age</p>
    <p className="content">{employee.age}</p>

</div>
)
}



export default App;
