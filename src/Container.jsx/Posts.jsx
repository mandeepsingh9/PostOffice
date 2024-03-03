import React, { useContext } from 'react'
import store from '../Stores/Store';
import Post from './Post';

const Posts = () => {
  let {data,pincode}=useContext(store);
  return (

    <div className='postscontainer'>

      
       <div className='abc'>
         <label><span>Pincode:</span>{pincode} </label>
         <label><span>Message:</span>  {data.length > 0 && data[0].Message} </label>
       </div>
      <input type='text' placeholder='Filter'/>
      <div className='posts'>
         {
            
            data.length > 0 && data[0].PostOffice.map((item, key) => 
            (
                <Post key={key} post={item} />
        
             ))

        }
      </div>

      </div>  
  )
}

export default Posts