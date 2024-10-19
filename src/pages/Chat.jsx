import { HiDotsHorizontal } from "react-icons/hi";
import Conversation from "../components/Conversation";
import ConversationList from "../components/ConversationList";
import { chat_icon } from "../data/AssetsImport";
import ChatNav from "../utils/ChatNav";
import Footer from "../utils/Footer";
import { useState } from "react";

function Chat() {
  const [currentClickedChatId, setCurrentClickedChatId] = useState(null);
  return (
    <div className="h-screen flex flex-col justify-between">
      <section className="max-h-[10vh]">
        <ChatNav />
      </section>
      <section className="w-[1080px] mx-auto flex flex-col  flex-grow    rounded-b-[12px] justify-between h-[50vh] items-center py-5">
        <div className="w-full h-[80px] bg-[#192965] flex items-center  rounded-tl-[22px] px-[2rem] rounded-tr-[22px] justify-between rounded-b-[12px]">
          <div className="h-full flex items-center gap-x-2">
            <img src={chat_icon} alt="chat Icon" />
            <p className="font-lato font-bold text-2xl text-white">Chat</p>
          </div>
          <div>
            <HiDotsHorizontal className="text-white" size={30} />
          </div>
        </div>
        <div className="flex items-start h-full w-full overflow-y-auto  rounded-b-[12px] justify-between flex-grow">
          <div className="w-[45%] h-full">
            <ConversationList
              setCurrentClickedChatId={setCurrentClickedChatId}
            />
          </div>
          <div className="h-full w-full bg-white">
            <Conversation currentClickedChatId={currentClickedChatId} />
          </div>
        </div>
      </section>
      <section className=" flex justify-center items-end">
        <Footer />
      </section>
    </div>
  );
}

export default Chat;
