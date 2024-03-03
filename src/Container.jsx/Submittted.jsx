import React from 'react'

const Submittted = ({handlealertbutton}) => {
  return (
    <div className='alert'>
      <level>localhost:3000 says</level><br></br>

      <level>Form Submitted Sucessfuly</level><br></br><br></br>
      <button onClick={handlealertbutton}>OK</button>
    </div>
  )
}

export default Submittted