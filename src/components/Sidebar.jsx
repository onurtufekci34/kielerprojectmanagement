import './Sidebar.css'
import {NavLink} from 'react-router-dom'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <p>Hello User</p>
        </div>
        <nav className='links'>  
          <ul>
            <li>
              <NavLink to="/">
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>  
  )
}
