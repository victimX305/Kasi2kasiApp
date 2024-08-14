import { Timestamp } from "firebase/firestore";

//import{ProfileUser} from "src/app/Models/users-profile"
export interface Chat {
  unreadCount: number;
  message: string;
  sender: string;
  createdAt: Timestamp;
  time: string; // Add time property
  isNew: string;
  type: string;
}



export interface Message {
  message: string;
  type: 'text' | 'image';
  sender: string;
  recipient: string;
  createdAt: Date;
  unread: boolean;
  read: boolean;  
}

export interface ChatMessage {
  message: ChatMessage;
  payload: {
    doc: {
      data: () => Chat;
    }
  };
  type?: string;
}
export interface Chatroom {
  id: string;
  participants: string[]; // Assuming participants are identified by their email addresses
  createdAt: any;
  members: string[];
  type: string;
  updatedAt: any;
  lastAccessedBy: string;
  // Add any other properties relevant to your Chatroom model
}
export interface User {
  uid: string;
  email: string;
  // Add other properties as needed
}
export interface EventPost {
  // Define properties of the event post, including the organizer's email
  documentId: string; // Unique identifier for the event poster
  title: string; // Title of the event
  organizer: string;
  // Other properties...
}
export interface ChatRoom {
  id: string;
}
export interface OrganizerData {
  fullname?: string;
  // Add other properties as needed
}
// wallpaper.model.ts
export interface Wallpaper {
  url: string;
}
// chat-room.interface.ts

export interface ChatRoom {
  id: string;
  updatedAt: Timestamp; // Adjust if updatedAt is a different type
  members: string[];
  user?: any; // Assuming user details are fetched separately
  lastMessage?: Message;
  lastMessageTimestamp?: number;
  unreadCount?: number;
  sortTimestamp?: number;
}
export interface ChatRoom {
  id: string;
  updatedAt: Timestamp;
  members: string[];
  user?: any; // Assuming user details are fetched separately
  lastMessage?: Message;
  lastMessageTimestamp?: number;
  unreadCount?: number;
  sortTimestamp?: number;
}
export interface ChatDocumentData {
  unreadCount?: number;
  // other properties of your chat document
}

