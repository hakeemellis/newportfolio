// websocket.js

// Handles WebSockets Connection - to allow real-time communication between the client-side (frontend) and the server (backend) (using the socket.io library)
// Like sending notifications, syncing data, etc.

// Import Required Variables
const { Server } = require("socket.io"); // Import the Server class from the socket.io library to create a WebSocket server

// Function to initialize the WebSocket server
const initializeWebSocket = (server) => {
  // define "server" as a parameter - to allow express routes to share WebSockets connection (due to port/http server being shared)
  try {
    // DEFINING WEB SOCKET SERVER
    const io = new Server(server, {
      cors: {
        // To allow cross-origin requests - to allow the client-side (frontend) to connect with the server (backend) - or it will block the connection
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST"],
        credentials: true, // To allow credentials to be passed from the client-side (frontend) to the server (backend)
      },
    });

    // WEB SOCKET CONNECTION
    io.on("connection", (socket) => {
      // To listen for a connection event - when a client connects to the server. "socket" is a parameter within
      // Server (rebranded as io) defined as a callback function to handle the connection event

      // Broadcast photo sync updates (commented out for now)
      /*
      socket.on("sync-photos", () => { // syntax remains the same, but the event name is different - due to doing a different task aka syncing photos
        console.log("sync-photos event received");
        socket.broadcast.emit("photos-updated"); // To broadcast the event to all connected clients except the sender (like IG photos/stories)
        console.log("photos-updated event broadcasted");
      });*/

      socket.on("disconnect", () => {});
    });

    return io; // Return the initialized WebSocket server
  } catch (error) {
    return null;
  }
};

module.exports = initializeWebSocket; // Export as a modular variable
