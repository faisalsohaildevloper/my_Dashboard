import React from 'react'

// mobile functionality into the TopHeader.jsx


const TopHeader = ({setMobileSiderbar}) => {

  return (
    <div className='p-2'>
      <div className='border-bottom p-2 d-flex justify-content-between align-items-center'>

         {/* Add functionality for make mobile responseive */}
        <div>
{/* 
          connect to siderbar.jsx with TopHeader.jsx through props */}
        <div className='d-block d-md-none' onClick={()=> setMobileSiderbar(true)}> menu</div>
        </div>
        
        <div>icons</div>
      </div>

    
    </div>
  )
}

export default TopHeader