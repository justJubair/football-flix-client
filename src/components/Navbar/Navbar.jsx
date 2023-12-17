import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white" : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myTeam"
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white" : undefined
          }
        >
          My Team
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/players"
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white" : undefined
          }
        >
          Players
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white" : undefined
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="absolute bg-transparent flex w-full items-center justify-between p-4 z-[100]">
      <div className="lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
          <label
            htmlFor="my-drawer"
            tabIndex={0}
            className="btn btn-ghost text-blue-400 lg:hidden"
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

      <img className="hidden md:block w-28" src={logo} alt="" />
      <div className="hidden lg:block">
        <ul className="menu menu-horizontal text-white px-1 space-x-4">{navLinks}</ul>
      </div>
      <div className="">
        <Link
          to="/login"
          className="btn border-none bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
        >
          <AiOutlineLogin size={22} />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
