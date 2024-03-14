import React, { useEffect, useState } from "react";
import { socket } from "../Socket";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ username, room }) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [displaymsg, setDisplayMsg] = useState("");
  const [msgList, setMsgList] = useState([]);

  const sendMsg = async () => {
    if (currentMsg !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMsgList((state) => [...state, messageData]);
      setDisplayMsg("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMsgList((state) => [...state, data]);
      console.log(data);
    });
  }, []);

  return (
    <div className="flex  flex-col justify-center md:items-center">
      <div className="min-h-screen  flex flex-col justify-between md:w-4/12  ">
        <div className="min-h-full flex items-center text-xl font-semibold p-2 border-b-2">
          🟢 Live chat
        </div>

        <ScrollToBottom className="flex flex-col h-[80vh] ">
          {msgList.map((item, index) => {
            return <Message msg={item} username={username} key={index} />;
          })}
        </ScrollToBottom>

        <div className="flex">
          <input
            id="chatInput"
            className="bg-gray-200 rounded p-1 focus:outline-none w-full "
            type="text"
            placeholder="type a message"
            value={displaymsg}
            onChange={(e) => {
              setCurrentMsg(e.target.value);
              setDisplayMsg(e.target.value);
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && sendMsg();
            }}
          ></input>
          <button
            className="py-2.5 px-6 rounded-lg font-medium text-white bg-teal-600 text-xl"
            onClick={sendMsg}
          >
            &#9658;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
