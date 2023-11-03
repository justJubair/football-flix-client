import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "../Container/Container";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/myTeam">My Team</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    
   
      
    <div className=" absolute navbar z-[100]">
      <div className="navbar-start">
        <div className="drawer lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
            <label
              htmlFor="my-drawer"
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-4">
              {/* Sidebar content here */}
              {navLinks}
            </ul>
          </div>
        </div>
        <img className="w-28" src={logo} alt="" />
      </div>
      <div className="navbar-center dra hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
    
   
  );
};
export default Navbar;
