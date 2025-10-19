import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Cards from './Card';
import MyClassComponent from './MyClassComponent';

function App() {
  return (
    <div className="App">
      {/* <Button name="Start"/> 
      <Button name="Pause"/>
      <Button name="Submit"/> */}

      {/* cards */}

      <Cards name = "Harsha" age = {25} mobilenumber = {12345}/>
      <Cards name = "Jhon" age = {26} mobilenumber = {56664574}/>
      <Cards name = "Mitch" age = {27} mobilenumber = {6766568}/>

      <MyClassComponent/>


    </div>
  );
}

export default App;
