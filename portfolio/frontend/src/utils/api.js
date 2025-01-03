// api.js

import axios from "axios";

const API_BASE_URL = "http://localhost:5001"; // Replace with your backend URL if deployed

export async function fetchSignedUrl(publicId, transformations = {}) {
  try {
    const response = await axios.get(`${API_BASE_URL}/generate-signed-url`, {
      params: { publicId, transformations: JSON.stringify(transformations) },
    });
    return response.data.signedUrl;
  } catch (error) {
    console.error("Error fetching signed URL:", error);
    throw error;
  }
}
