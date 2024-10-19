import { NavLink } from "react-router-dom";
import { logo } from "../data/AssetsImport";

function Nav() {
  // Define active and deactive styles using Tailwind CSS classes
  const activeStyle = "text-primary-active_nav font-medium text-base font-lato";
  const deactiveStyle = "text-primary-deactive_nav font-medium font-lato";

  return (
    <nav className="flex justify-between items-center w-screen px-[6vw] bg-white border-b-2 border-b-[#E1E6EF] h-[96px] ">
      {/* Logo Section */}
      <div className="">
        <img src={logo} alt="uExcelerate logo" className="h-8" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-x-[2vw] w-full justify-center items-center">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}
        >
          About Us
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}
        >
          Product
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}
        >
          Blog
        </NavLink>
      </div>

      {/* Right-side Placeholder */}
      <div className="border-2 border-[#14213D]  w-[91px] h-[48px] flex items-center justify-center rounded-[8px] font-Jakarta font-semibold">
        <button className="bg-transparent">Login</button>
      </div>
    </nav>
  );
}

export default Nav;
