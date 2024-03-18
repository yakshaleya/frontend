import {React,useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCupHot, BsCashStack, BsHouseDoorFill } from 'react-icons/bs'
import { FaPowerOff, FaRegNewspaper } from "react-icons/fa";
import "./SideBar.css"


function SideBar({ openSidebarToggle, OpenSidebar,showProfileModal }) {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(window.location.pathname); 

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveItem(window.location.pathname);
    };
 
    window.addEventListener('popstate', handleLocationChange); 
 
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);
 

  const handleLogout = async () => {
    try {
      const response = await fetch("https://localhost:7244/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        localStorage.clear();
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
    <div className='sidebar-title'>
      <div className='sidebar-brand'>
        <img src='/pictures/logo.png' width={150}></img>
      </div>
      <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className="sidebar-list">
      <Link to="/">
        <li className={`sidebar-list-item ${activeItem === '/' ? 'active' : ''}`}>
          <a className="sidebar-item" href="">
            <BsHouseDoorFill className="icon-home" /> Home
          </a>
        </li>
      </Link>

      <Link to='/dashboard'>
        <li className={`sidebar-list-item ${activeItem === '/dashboard' ? 'active' : ''}`}>
          <a className="sidebar-item" href="">
            <BsCashStack className="icon" /> Dashboard
          </a>
        </li>
      </Link>

      <Link to="/advisors">
        <li className={`sidebar-list-item ${activeItem === '/advisors' ? 'active' : ''}`}>
          <a className="sidebar-item" href="">
            <BsPeopleFill className="icon" /> Requests
          </a>
        </li>
      </Link>

      <Link to="/Investments_Page">
      <li className={`sidebar-list-item ${activeItem === '/Investments_Page' ? 'active' : ''}`}>
        <a className="sidebar-item" href="">
          <BsMenuButtonWideFill className="icon" /> Investments
        </a>
      </li>
      </Link>


      <Link to='/profilepage'>
        <li className={`sidebar-list-item ${activeItem === '/profilepage' ? 'active' : ''}`}>
          <a className="sidebar-item" href="">
            <FaRegNewspaper className="icon" /> Profile
          </a>
        </li>
      </Link>

      <li className='sidebar-list-item'>
        <a className="sidebar-item" onClick={handleLogout}>
          <FaPowerOff className='icon' /> Logout
        </a>
      </li>
    </ul>
  </aside>
  )
}

export default SideBar
