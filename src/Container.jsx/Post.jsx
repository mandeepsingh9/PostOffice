import React from 'react'

const Post = ({post}) => {
  return (
    <div className='post'>
     <label><span>Name:</span> {post.Name}</label>
     <label><span>Branch Type:</span> {post.BranchType}</label>
     <label><span>Delivery Status:</span> {post.DeliveryStatus}</label> 
     <label><span>District:</span> {post.District}</label>
     <label><span>State:</span> {post.State}</label>
    </div>
  )
}

export default Post