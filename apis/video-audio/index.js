import { BACKEND_URL } from '@/utility/const';
import axios from '../axios'

export async function extractAudio(query) {
   try {
      const response = await axios.post(`${BACKEND_URL}video/extract-audio`, query);
      const { status, data, msg } = response?.data;
      if (!status) {
         throw msg;
      }
      return data;
   } catch (error) {
      throw error?.response?.data?.msg || error;
   }
}