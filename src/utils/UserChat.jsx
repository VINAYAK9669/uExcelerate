/* eslint-disable react/prop-types */

import { useState } from "react";
import { live_chat_icon } from "../data/AssetsImport";

function UserChat({ users, setCurrentClickedChatId }) {
  // Store the ID of the currently clicked user
  const [activeChatId, setActiveChatId] = useState(null);

  const handleClick = (userId) => {
    setActiveChatId(userId);
    setCurrentClickedChatId(userId);
  };

  return (
    <div className="">
      {users.map((user, index) => (
        <div
          className={`w-full flex items-start gap-y-2 justify-start py-[18px] px-3 border-b-2 border-b-[#E1E6EF] cursor-pointer ${
            activeChatId === user.id
              ? "bg-background-card_bg relative"
              : "relative"
          }`} // Add conditional class for background
          key={index}
          onClick={() => handleClick(user.id)} // Pass the user id on click
        >
          <div className="relative rounded-full flex items-center justify-center w-[20%]">
            {user.connectionName === "Group chat" ? (
              <div className="w-[40px] h-[40px] relative rounded-full">
                {user?.imgURLs?.map((img, index) => (
                  <div key={index}>
                    {index === 0 ? (
                      <img
                        src={img}
                        className="object-cover absolute top-0 right-0 w-[20px] h-[20px] rounded-full"
                      />
                    ) : (
                      <img
                        src={img}
                        className="object-cover absolute bottom-0 left-0 w-[20px] h-[20px] rounded-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-hidden rounded-full flex justify-center items-center w-[40px] h-[40px]">
                <img src={user.userImageUrl} className="w-full object-cover" />
                {user.isUserOnline ? (
                  <span className="w-[12px] h-[12px] bg-green-500 rounded-full absolute bottom-0 right-2 z-100"></span>
                ) : (
                  <span className="w-[12px] h-[12px] bg-primary-dull_text rounded-full absolute bottom-0 right-2 z-100"></span>
                )}
              </div>
            )}
          </div>
          <div className="w-[80%] flex flex-col justify-between h-full gap-y-3">
            <h1 className="font-lato font-medium text-lg flex justify-between items-center">
              {user.connectionName}
              <span className="text-md font-medium text-primary-dull_text">
                {user.timeReceived}
              </span>
            </h1>
            <p className="text-primary-dull_text font-lato text-base">
              {user.lastMessage}
            </p>
            <div className="flex justify-start items-center w-full gap-x-1">
              <img src={live_chat_icon} />
              <p className="font-medium font-lato text-md text-primary-chat_live_text">
                Live chat
              </p>
            </div>
            {activeChatId === user.id && (
              <span className="absolute h-full w-2 bg-slate-600 left-0 top-0"></span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserChat;
