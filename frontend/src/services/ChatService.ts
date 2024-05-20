import { APIS, TYPES } from "../utils";
import { AxiosInstance } from "./instance";

const chatGptRequest = async (data: TYPES.TChatGPTReq) => {
  const response = await AxiosInstance.post(APIS.ChatGpt, data);
  return response.data;
};

const ChatServices =  {
  chatGptRequest,
}

export default ChatServices;
