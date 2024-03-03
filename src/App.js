
import './App.css';
import Input from './Container.jsx/Input';

import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Container.jsx/Posts';
import Store from './Stores/Store';


function App() {
   const [data,setdata]=useState([]);
  const [inputPin,setinputPin]=useState();
  const [pincode,setpincode]=useState();

   const [active,setactive]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const res = await response.json();
            setdata(res);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (pincode) {
        fetchData();
    }

}, [pincode]);


  function handlepincode(e)
  {
    setinputPin(e.target.value);
  }

   function handleSubmit(e)
   {
       e.preventDefault();

       console.log(inputPin);
       setpincode(inputPin);
       setactive(true);
   }
  
  return (
    <> 

        <Store.Provider value={{handlepincode,handleSubmit,data,pincode}}>

            
          {!active ? <Input/> :<Posts/> }
           
        
           
        </Store.Provider>
   </>
  );
}

export default App;
