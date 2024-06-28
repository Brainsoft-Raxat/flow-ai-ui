import axios from 'axios';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const sendChatMessage = async (chatType: string, content: string) => {
  try {
    const endpoint = chatType === 'asia' ? '/chat-asia' : '/chat-shop';
    const response = await axios.post(`${VITE_API_BASE_URL}${endpoint}`, { content });
    return response.data;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};
