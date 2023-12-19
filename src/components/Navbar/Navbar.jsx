import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="duration-200 hover:border-b border-blue-400">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500  text-white px-3 py-2 rounded-md" : "px-3 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="duration-200 hover:border-b border-blue-400">
        <NavLink
          to="/myTeam"
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500  text-white px-3 py-2 rounded-md" : "px-3 py-2"
          }
        >
          My Team
        </NavLink>
      </li>
      <li className="duration-200 hover:border-b border-blue-400">
        <NavLink
          to="/players"
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500  text-white px-3 py-2 rounded-md" : "px-3 py-2"
          }
        >
          Players
        </NavLink>
      </li>
      <li className="duration-200 hover:border-b border-blue-400">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500  text-white px-3 py-2 rounded-md" : "px-3 py-2"
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

      <img className="hidden md:block w-32 bg-blue-100 px-2 py-2 rounded" src={logo} alt="" />
      <div className="hidden lg:block">
        <ul className="flex text-white px-1 space-x-4">{navLinks}</ul>
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
