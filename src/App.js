import React from 'react';
import Method from './Components/PaymentMethod/Method';
import Card from './Components/ServiceSec/Card';
import {Route, Routes} from "react-router-dom";
import CardDetails from './Components/PaymentDetail/CardDetails';
import Greetings from './Components/Greeting/Greetings';

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
            <Route path="/" element={<Card/>}/>          
            <Route path="method" element={<Method />} />
            <Route path="detail" element={<CardDetails />} />
            <Route path="greeting" element={<Greetings/>} />
        </Routes>
      </div>   
    </>   
  );
}

export default App;
