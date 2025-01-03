// src/services/api.js
import axios from 'axios';

// Set up base URL for your backend API
const API = axios.create({
  baseURL: 'http://localhost:5001/api', // Replace with your backend URL if deployed
});

// Function to get projects from the backend
export const getProjects = async () => {
  try {
    const response = await API.get('/projects');
    return response.data.data; // Return the data (projects)
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// Function to get media (optional if you have separate media calls)
export const getMedia = async () => {
  try {
    const response = await API.get('/media');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching media:', error);
    return [];
  }
};
