import logo from './logo.svg';
import './App.css';
import ParkingSlots from './Pages/ParkingSlots';
import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar'
import { useState } from 'react';
import Login from './Pages/Login';
import Backdrop from './UI/Backdrop/Backdrop';
import SignIn from './Pages/SignIn';
function App() {
  const [sidebaron,setSidebaron] = useState(false);
  const offSideBar = ()=>{
    setSidebaron(false)
  }
  const turnOnSideBar = ()=>{
    setSidebaron(true)
  }

  
  return (
    <div className="App">
       <Navbar 
      off = {offSideBar}
      active = {"Parking Slot"}
      first = {"Smart"}
      last = "Parking Slot"
      header = "Smart Parking Slot"
      expand = {turnOnSideBar}
      list
      = {["LogOut","Parking Slot","In-Out Times","Security Images"]}></Navbar>
      <ParkingSlots></ParkingSlots>
      <SideBar 
      off = {offSideBar}
      active = {"Parking Slot"}
      first = {"Smart"}
      last = "Parking Slot"
      header = "Smart Parking Slot"
      disabled = {!sidebaron}
      list
      = {["LogOut","Parking Slot","In-Out Times","Security Images"]}></SideBar>
    <Backdrop
    off = {offSideBar}
    on = {sidebaron}
    ></Backdrop>
   
    </div>
  );
}

export default App;
