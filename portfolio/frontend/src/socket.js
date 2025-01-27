// socket.js (WebSocket as a singleton module)

// --- Import Dependencies ---
import { io } from 'socket.io-client';

// --- Initialize/Setup WebSocket ---
const socket = io.connect('http://localhost:5001', {
  secure: true,
  rejectUnauthorized: false,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity,
  transports: ['websocket'],
  withCredentials: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default socket; // Export WebSocket