import React, { useContext, useState } from 'react'
import store from '../Stores/Store'


const Input = () => {
      const obj=useContext(store);

  return (
<>
  

<form onSubmit={obj.handleSubmit}>
        
     <div className='inputholder'>

        <label className='lbl'>pincode</label>   
        <input type='number'placeholder='Enter your pincode' onChange={obj.handlepincode}/>

      </div>
         
       
        <button>Submit</button>
    </form>

    </>
  )
}

export default Input