import { NavLink } from "react-router-dom";
import {
  connection_icon,
  home_icon,
  logo,
  message_icon,
  user_Icon,
} from "../data/AssetsImport";

function ChatNav() {
  return (
    <nav className="flex justify-between items-center w-screen px-[6vw] bg-white border-b-2 border-b-[#E1E6EF] h-[96px] ">
      <div className="w-[30%]">
        <NavLink to="/home">
          <img src={logo} alt="uExecelerate Logo" />
        </NavLink>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-start gap-x-[2.5rem]">
          <div className="flex items-center gap-x-2">
            <img src={home_icon} alt="Connection Icon" />
            <p className="text-primary-dashboard_text_nav text-base cursor-pointer">
              Home
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={connection_icon} alt="Connection Icon" />
            <p className="text-primary-dashboard_text_nav text-base cursor-pointer">
              Connections
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-x-5">
        <div className="cursor-pointer">
          <img
            src={message_icon}
            alt="message_Icon"
            className="h-[38px] w-[38px]"
          />
        </div>
        <div className="cursor-pointer">
          <img
            src={user_Icon}
            alt="message_Icon"
            className="h-[28px] w-[28px]"
          />
        </div>
      </div>
    </nav>
  );
}

export default ChatNav;
