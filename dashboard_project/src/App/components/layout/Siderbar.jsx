import { Link } from "react-router-dom"
import useActive from "../../../hooks/useActive"
import { paths } from "../../Routes/paths"



const Siderbar = () => {
  const links =[
    {
      name: "Home",
      path: paths.home
    },
  
    {
      name: "About",
      path: paths.about
    },
  
    {
      name: "Contact",
      path: paths.contact
    }
  ]
  



  // make responsive sidebar use map function for collect data of array from links  variable above and use Link value from react router <Link></Link>
  return (
    <div className='menu'>
      {links?.map(x => <div  key={x.name}><Link to={x.path} className={`_link ${useActive(x.path)}`}>{x.name}</Link></div>)}
      
    </div>
  )
}

export default Siderbar