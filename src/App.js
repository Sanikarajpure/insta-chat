import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const handleSetUserName = (value) => {
    setUsername(value);
  };

  const handleSetRoom = (value) => {
    setRoom(value);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              username={username}
              toggleUsername={handleSetUserName}
              room={room}
              toggleRoom={handleSetRoom}
            />
          }
        />
        <Route
          exact
          path="/chat"
          element={<Chat room={room} username={username} />}
        />
      </Routes>
    </div>
  );
}

export default App;
