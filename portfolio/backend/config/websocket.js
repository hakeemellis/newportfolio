// websocket.js

// Handles WebSockets Connection

// Import Required Variables
const { Server } = require("socket.io");

// Function to initialize the WebSocket server
const initializeWebSocket = (server) => {
  try {
    const io = new Server(server, {
      cors: {
        origin: process.env.CORS_ORIGIN, // Use the CORS origin from the environment variables
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    // WEB SOCKET CONNECTION
    io.on("connection", (socket) => {
      console.log("A user connected");

      // Broadcast photo sync updates
      socket.on("sync-photos", () => {
        console.log("sync-photos event received");
        socket.broadcast.emit("photos-updated"); // Notify all clients
        console.log("photos-updated event broadcasted");
      });

      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });

    return io; // Return the initialized WebSocket server
  } catch (error) {
    console.error("Error initializing WebSocket server:", error);
    return null;
  }
};

module.exports = initializeWebSocket;
