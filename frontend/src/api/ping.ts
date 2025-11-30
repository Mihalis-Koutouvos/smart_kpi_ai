import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function pingBackend() {
  try {
    const response = await axios.get(`${BASE_URL}/ping`);
    return response.data;
  } catch (error) {
    console.error("Ping failed:", error);
    return { message: "Ping error" };
  }
}