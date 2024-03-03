import React, { useContext, useState } from 'react'
import store from '../Stores/Store';
import Post from './Post';

const Posts = () => {
  let {data,pincode}=useContext(store);
  const [filterValue, setFilterValue] = useState('');
 function handlefilter(e)
 {
   if(e.key==='Enter')
    setFilterValue(e.target.value.trim().toLowerCase());
 }
  return (

    <div className='postscontainer'>

      
       <div className='abc'>
         <label><span>Pincode:</span>{pincode} </label>
         <label><span>Message:</span>  {data.length > 0 && data[0].Message} </label>
       </div>
      <input type='text' placeholder='Filter' onKeyDown={handlefilter}/>
      <div className='posts'>
      {data.length > 0 &&
          data[0].PostOffice
            .filter(post => post.Name.toLowerCase().includes(filterValue))
            .map((item, key) => (
              <Post key={key} post={item} />
            ))
        }
      </div>

      </div>  
  )
}

export default Posts