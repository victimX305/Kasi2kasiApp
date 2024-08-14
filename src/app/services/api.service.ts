import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, OrderByDirection, addDoc, collection, collectionData, doc, docData, getDoc, getDocs, orderBy, query, setDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { AuthService } from './auth.service';
export interface Message {
  unreadCount: number;
  id: string; // Unique identifier for the message
  content: string; // Content of the message
  senderId: string; // ID of the user who sent the message
  recipientId?: string; // ID of the user who received the message (optional)
  createdAt: Date; // Timestamp when the message was sent
  chatId: string; // ID of the chat room or conversation
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestorer: AngularFirestore,
    private http: HttpClient,
              private firestore: Firestore) { }

  docRef(path)
  {
    return doc(this.firestore, path);
  }
  collectionRef(path)
  {
   // const dataRef = this.docRef(path);
    return collection(this.firestore, path);

  }
  setDocuments(path, data)
  {
    const dataRef = this.docRef(path);
  return setDoc(dataRef, data);
  }
  addDocument(path, data)
  {
     const dataRef = this.collectionRef(path);
     return addDoc(dataRef, data);
  }
  getDocById(path)
  {
    const dataRef = this.docRef(path);
    return getDoc(dataRef);
  }
  getDocs(path, queryFn?)
  {
    let dataRef: any = this.collectionRef(path);
    if(queryFn)
    {
      const q = query(dataRef, queryFn);
      dataRef = q;
    }
    return getDocs(dataRef);
  }
  collectionDataQuery(path, queryFn?)
  {
    let dataRef: any = this.collectionRef(path);
    if(queryFn)
    {
      const q = query(dataRef, queryFn);
      dataRef = q;
    }
    
    const collection_data = collectionData<any>(dataRef, {idField: 'id'});
    return collection_data;
  }

  docDataQuery(path, id?, queryFn?)
  {
    let dataRef: any = this.docRef(path);
    if(queryFn)
    {
      const q = query(dataRef, queryFn);
      dataRef = q;
    }
    let doc_data;
    if(id) doc_data = docData<any>(dataRef, {idField: 'id'});
    else doc_data  = docData<any>(dataRef);
    return doc_data;
  }
   whereQuery(fieldPath, condition, value) 
   {
    return where(fieldPath, condition, value);
  }
  orderByQuery(fieldPath, directionStr: OrderByDirection = 'asc')
  {
    return orderBy(fieldPath, directionStr);
  }
  getReceivedMessages(roomId: string): Observable<any[]> {
    // Replace 'receivedMessages' with the actual collection name or path in your Firestore
    return this.firestorer.collection( `chats/${roomId}`).valueChanges();
  }
  getMessagesForChat(chatId: string): Observable<Message[]> {
    // Assuming your API endpoint to fetch messages for a chat is '/api/messages/:chatId'
    const url = `/api/messages/${chatId}`;
    return this.http.get<Message[]>(url);
  }
  
}
