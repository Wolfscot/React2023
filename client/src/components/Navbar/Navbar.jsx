import "./navbar.css"

import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span className="logo">
          <img src={logo} alt="Logo" width="150" height="100" />          
        </span>
        <div className="nav-items">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar