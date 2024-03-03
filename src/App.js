
import './App.css';
import Input from './Container.jsx/Input';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Container.jsx/Posts';
import Store from './Stores/Store';
import { MutatingDots } from 'react-loader-spinner';


function App() {
   const [data,setdata]=useState([]);
  const [inputPin,setinputPin]=useState();
  const [pincode,setpincode]=useState();
  const [loading, setLoading] = useState(false);
   const [active,setactive]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
        try {
          setLoading(true);
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            if (!response.ok) {
                toast.error('Network response was not ok.');
                return;
            }
          
            const res = await response.json();
            setdata(res);
            
        } catch (error) {
            toast.error('Error fetching data:');
        }
        finally{
          setLoading(false);
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
        
       if(inputPin<6)
         {
           toast.error("Pin Must be greater than 6")
          return;
         }
       console.log(inputPin);
       setpincode(inputPin);
       setactive(true);
   }
  
  return (
    <> 
    <Toaster position="top-center"reverseOrder={false}/>
  
    {loading && (
  <div style={{ display: 'flex', justifyContent: 'center',  height: '100vh' }}>
    <MutatingDots visible={true} height="100" width="100" color="#4fa94d" secondaryColor="#4fa94d" radius="12.5" ariaLabel="mutating-dots-loading"/>
  </div>
)}

   
        <Store.Provider value={{handlepincode,handleSubmit,data,pincode}}>

            
          {!active ? <Input/> :<Posts/> }
           
        
           
        </Store.Provider>
   </>
  );
}

export default App;
