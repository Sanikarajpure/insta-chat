import { io } from "socket.io-client";

export const socket = io.connect("http://3.110.87.198", {
  path: "/mysocket",
});
