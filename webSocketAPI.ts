interface Message {
  type: string;
  data: any;
}

const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", () => {
  console.log("WebSocket connection established");
});

socket.addEventListener("message", (event: MessageEvent) => {
  const message: Message = JSON.parse(event.data);
  console.log("Received message:", message);
});

socket.addEventListener("close", () => {
  console.log("WebSocket connection closed");
});

socket.addEventListener("error", (error: Event) => {
  console.error("WebSocket error:", error);
});

function sendMessage(type: string, data: any) {
  const message: Message = { type, data };
  socket.send(JSON.stringify(message));
}

// Example usage:
sendMessage("hello", { name: "Alice" });
