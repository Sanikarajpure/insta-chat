// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../Socket";

const Home = ({ username, toggleUsername, room, toggleRoom }) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
    navigate("/chat");
  };

  const handleUserName = (name) => {
    toggleUsername(name);
  };

  const handleRoom = (room) => {
    toggleRoom(room);
  };

  return (
    <div className="flex justify-center items-center  min-h-screen md:text-xl">
      <div className="w-10/12 md:w-4/12">
        <h3 className="p-5 text-6xl">Insta Chat👋🏼</h3>
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row justify-around py-2 my-2 ">
            <label className="p-1 hidden md:block">Name:</label>{" "}
            <input
              className="bg-gray-200 rounded p-1 focus:outline-none "
              type="text"
              placeholder="Name"
              onChange={(e) => {
                handleUserName(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex flex-col md:flex-row justify-around py-2 my-2 ">
            <label className="p-1 hidden md:block">Room:</label>
            <input
              className="bg-gray-200 rounded p-1 focus:outline-none "
              type="text"
              placeholder="Room ID"
              onChange={(e) => {
                handleRoom(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button
          className=" my-5  py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600"
          onClick={joinRoom}
        >
          Join A Room
        </button>
      </div>
    </div>
  );
};

export default Home;
