declare module "chats" {
  export function log(chats: Chat[]): void;
  export const chats: Chat[];
} 
interface Chat {
    time: string;
    message: string;
  }
export {};