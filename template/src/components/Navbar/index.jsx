import React from 'react';
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav style={{display:'flex',justifyContent:'space-around'}} className="navbar navbar-expand-lg navbar-light bg-light">
      <a style={{display:'flex',padding:'20px',justifyContent:'space-between'}} className="navbar-brand" href="#"><img src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" alt="" />
      <form className="form-inline my-2 my-lg-0">
          <input style={{marginLeft:'10px'}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><CiSearch /></button>
        </form>
        </a>
      
      <div style={{display:'flex',margin:'0',listStyle:'none'}} className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul style={{display:'flex',margin:'20px'}} className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link" href="#">FAQ</a>
          </li>
          <li style={{marginLeft:'20px'}} className="nav-item">
            <a className="nav-link disabled" href="#">Track Order</a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
