/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { chatList } from "../data/data";
import UserChat from "../utils/UserChat";

function ConversationList({ setCurrentClickedChatId }) {
  const [chatLists, setChatLists] = useState(chatList);
  const [totalChats, setTotalChats] = useState(chatLists.length);
  const [totalUnreadChats, setTotalUnreadChats] = useState(0);
  const [totalReadChats, setTotalReadChats] = useState(0);

  // Track active button state
  const [activeTab, setActiveTab] = useState("all");

  // Styles
  const h1 = "font-bold text-base font-lato";
  const activeButtonStyle = "text-[#2563EB]";
  const inactiveButtonStyle = "text-primary-dashboard_text_nav";

  // Filtered chat lists based on activeTab
  const getFilteredChats = () => {
    if (activeTab === "all") {
      return chatLists;
    } else if (activeTab === "unread") {
      return chatLists.filter((chat) => !chat.isViewed);
    } else if (activeTab === "read") {
      return chatLists.filter((chat) => chat.isViewed);
    }
    return [];
  };

  useEffect(() => {
    // Calculate the total unread and read chats only once when chatLists changes
    const unreadChats = chatLists.filter((chat) => !chat.isViewed).length;
    const readChats = chatLists.filter((chat) => chat.isViewed).length;

    setTotalUnreadChats(unreadChats);
    setTotalReadChats(readChats);
    setTotalChats(chatLists.length);
  }, [chatLists]);

  return (
    <div className="flex flex-col gap-y-[0.2rem] h-full bg-white w-full border-r-2 border-r-[#E1E6EF] ">
      <div className="flex justify-between items-center mt-4 h-[48px] border-b-2 border-b-[#E1E6EF] px-4 py-2 ">
        <button
          onClick={() => setActiveTab("all")}
          className={`${h1} ${
            activeTab === "all" ? activeButtonStyle : inactiveButtonStyle
          }`}
        >
          All ({totalChats})
        </button>
        <button
          onClick={() => setActiveTab("unread")}
          className={`${h1} ${
            activeTab === "unread" ? activeButtonStyle : inactiveButtonStyle
          }`}
        >
          Unread ({totalUnreadChats})
        </button>
        <button
          onClick={() => setActiveTab("read")}
          className={`${h1} ${
            activeTab === "read" ? activeButtonStyle : inactiveButtonStyle
          }`}
        >
          Read ({totalReadChats})
        </button>
      </div>

      <div className="flex flex-col gap-y-0 overflow-y-auto h-full">
        <UserChat
          users={getFilteredChats()}
          setCurrentClickedChatId={setCurrentClickedChatId}
        />
      </div>
    </div>
  );
}

export default ConversationList;
