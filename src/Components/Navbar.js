import react from 'react'
import{NavLink} from 'react-router-dom'

const Navbar =()=>{
 
    return(
        <>
        <div className='navbar'>
        <span>
            <NavLink  exact to='/' style={{color:"white"}} >Home</NavLink>
            </span>  
         <span>
             <NavLink exact to='/login'  style={{color:"white"}} >Login</NavLink>
            </span>
          <span>
            <NavLink exact to='/registration'style={{color:"white"}} >Registration</NavLink>
            </span>
          <span>
            <NavLink exact to='/display' style={{color:"white"}}>Display</NavLink>
            </span>
        </div>
        </>
    )
}
export default Navbar