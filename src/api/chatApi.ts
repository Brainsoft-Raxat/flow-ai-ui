import axios from 'axios';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const sendChatMessage = async (question: string) => {
  try {
    const response = await axios.post(`${VITE_API_BASE_URL}/chat`, { question });
    return response.data;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};
