type TMessage = {
  ai: boolean;
  text: string;
}

type TChatGPTReq = {
  prompt: string;
  messages: TMessage[];
}

export type {
  TMessage,
  TChatGPTReq,
}
