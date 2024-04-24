import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import { style } from '../../helpers/style'
import { MdDashboard } from 'react-icons/md'

const Landing = () => {
  return (
    <div style={{minHeight: '100vh'}} className={ `container ${style.flexY} pb-4`}>
    
      
      <Navbar />
      {/* <button className='btn btn-dark'>
        <Link to={'./home'} className='_link text-white'>Dashboard</Link>
      </button> */}

      <Button icon={<MdDashboard/>}><Link className='_link' to={'./home'}>Dashboard</Link></Button>

      <Footer/>
    </div>
  )
}

export default Landing