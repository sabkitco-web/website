import { GOOGLE_CHAT } from '@/utility/const';
import axios from './axios'

export async function notifyGoogleChat(message) {
    return axios.post(GOOGLE_CHAT, {text : message});
}