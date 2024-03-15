import React from "react";

const Message = ({ msg, username }) => {
  console.log(msg.author === username);
  return (
    <div className={`flex py-3 relative flex-grow flex-col `}>
      <div
        className={`msgContainer w-fit rounded-lg  m-1 p-3 px-4 text-sm ${
          msg.author === username
            ? "bg-gray-300 mr-auto"
            : "bg-green-300 ml-auto"
        }  flex flex-col`}
      >
        <div className=" text-gray-600 text-[10px]  text-right leading-none msgAuthor">
          <p>~{msg.author}</p>
        </div>
        <div className="msgContent text-xl font-semibold  ">
          <p>{msg.message}</p>
        </div>
        <div className="msgTime text-gray-600 text-[10px] text-right leading-none">
          <p>{msg.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
