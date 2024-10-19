import { useEffect, useState } from "react";
import { chatList } from "../data/data";
import { CiSearch, CiUser } from "react-icons/ci";
import { MdContentCopy, MdEmojiEmotions } from "react-icons/md";
import { FaPlus, FaTelegramPlane } from "react-icons/fa";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
function Conversation({ currentClickedChatId }) {
  const [conversation, setConversation] = useState([]);
  const [selectedChat, setSelectedChat] = useState({});

  useEffect(() => {
    const selectedChat = chatList.find(
      (chat) => chat.id === currentClickedChatId
    );
    setSelectedChat(selectedChat);
    setConversation(selectedChat ? selectedChat.chat : []);
  }, [currentClickedChatId]);

  return (
    <div className="w-full h-full flex flex-col gap-y-4 items-start  ">
      <div className="h-[64px] bg-[#E1E6EF] w-full flex items-center justify-between px-5">
        <div className="flex items-center gap-x-3 h-[64px]">
          <CiUser size={24} />
          <h1 className="text-lg font-lato">Search by coachee name</h1>
        </div>
        <div>
          <CiSearch size={24} />
        </div>
      </div>
      <div className="w-full overflow-y-auto h-full">
        {conversation.length > 0 ? (
          conversation.map((chat, index) => (
            <div className="flex flex-col gap-y-3 w-full px-5 py-4" key={index}>
              <div className="flex items-center gap-x-3 w-full">
                <div className="overflow-hidden rounded-full flex justify-center items-center w-[40px] h-[40px]">
                  <img
                    src={
                      chat.isOwnerMessage
                        ? "https://media.licdn.com/dms/image/v2/D4D03AQFIsOIsdSFzNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719308935690?e=1734566400&v=beta&t=gEJoDAKap6io4ghXigIf6LtCwR8amHPe6M_OZLBr8XQ"
                        : `${
                            selectedChat.connectionName === "Group chat"
                              ? chat.userImageUrl
                              : selectedChat.userImageUrl
                          }`
                    }
                    className="w-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="font-lato font-medium text-lg flex justify-between items-center">
                    {chat?.userName}
                  </h1>
                </div>
              </div>
              <div className="w-full h-full p-[1rem] bg-[#F8F9FC] rounded-bl-[16px]  rounded-br-[16px] rounded-tr-[16px] border-2 border-[#E1E6EF]">
                <div className="py-3 border-b-2 border-b-[#E1E6EF] w-full ">
                  <h1 className="text-[#192965] font-lato text-lg">
                    {chat.message}
                  </h1>
                </div>
                <div className="flex gap-x-3 items-center p-3 text-primary-dull_text">
                  <LuThumbsUp
                    size={24}
                    className={`${
                      chat.isMessageLiked ? "text-primary-highlight_text" : ""
                    }`}
                  />
                  <LuThumbsDown size={24} />
                  <MdContentCopy size={24} />
                  <HiOutlineDotsHorizontal size={24} />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-md font-lato font-medium text-primary-dull_text">
                  {chat.date}
                </p>
                <span className="bg-[#E1E6EF] w-[1px] h-[19px] mx-1"></span>
                <p className="text-md font-lato font-medium text-primary-dull_text">
                  {chat.time}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="px-5">No conversation available</p>
        )}
      </div>
      <div className="px-5 h-[80px] flex items-center w-full p-[30px] border-t-2 border-t-[#E1E6EF] justify-between">
        <div className="flex w-[40%] h-full items-center gap-x-2">
          <MdEmojiEmotions size={25} className="text-[#71778E]" />
          <input
            type="text"
            placeholder="Send your message… "
            className="outline-none text-lato"
          />
        </div>
        <div className="flex items-center gap-5">
          <FaPlus size={18} className="text-primary-dull_text" />
          <button className="h-[36px] w-[36px] rounded-[10px] bg-[#60A5FA] flex items-center justify-center">
            <FaTelegramPlane className="text-white" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
