import React from 'react'
import {MdDashboard} from 'react-icons/md'
import { style } from '../../../helpers/style'


const Navbar = () => {
  return (
    <div style={{width: "100%"}} className={`${style.flexX('between')} text-dark py-2`}> 
      <h3>Faisal Script</h3>
      <span className={`${style.flexX()}gap-2`}>Dashboard <MdDashboard /> </span> 

    </div> 
  )
}

export default Navbar