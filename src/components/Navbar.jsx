import './Navbar.css'
import {Link} from 'react-router-dom'
import Logo1 from '../assets/logo1.png'
import {useLogout} from '../hooks/useLogout'





export default function Navbar() {

    const {logout} =useLogout();

  return (
    <div className='navbar'>
    <ul>
        <li className='logo'>
        <img src={Logo1} alt="Kieler Project Management" />
            <span>Kieler Project Management</span>
        </li>

        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/signup">Signup</Link>
        </li>
        <li>
            <button className='logout-btn' onClick={logout}>Logout</button>
        </li>
    </ul>
</div>
  )
}
