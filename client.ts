import { WebSocket } from "ws";

const port = 1234;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.on("open", () => {
  console.log("Client connected");
  ws.send(`Hi, this is a client`);
});

ws.on("message", (data) => {
  console.log(`Recieved a message from server: ${data}`);
});
