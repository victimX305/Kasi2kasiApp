import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject, firstValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class EventService {

  constructor(private firestore: AngularFirestore,
    ) { }

  private eventsRefreshed = new Subject<void>();

  
 


  // Function to delete past events
  deletePastEvents() {
    const currentTime = new Date();
  
    this.firestore.collection('events')
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          const eventData = doc.data() as { endDate: any };
          const eventEndDate = new Date(eventData.endDate);
  
          if (eventEndDate < currentTime) {
            const deletedEventData = { ...eventData }; // Create a copy of the data
            
            // Move the document data to 'history' collection before deletion
            this.firestore.collection('history').add(deletedEventData)
              .then(async () => {
                console.log('Event moved to history successfully');
                doc.ref.delete(); // Delete the document from 'events' collection
               
                console.log('Event deleted successfully');
                this.eventsRefreshed.next(); // Notify component after deletion

                await this.deleteEventFromReminders(deletedEventData);
                console.log('Event deleted from reminders collection successfully');
      
              })
              .catch(error => {
                console.error('Error moving event to history:', error);
              });
          }
        });
      });
  }

  async deleteEventFromReminders(eventData: any) {
    const remindersCollectionRef = this.firestore.collection('reminders', ref =>
      ref.where('documentId', '==', eventData.documentId)
    );
  
    try {
      const querySnapshot = await firstValueFrom(remindersCollectionRef.get());
  
      if (!querySnapshot.empty) {
        querySnapshot.forEach(async doc => {
          try {
            await doc.ref.delete();
            console.log('Event deleted from reminders collection successfully');
          } catch (error) {
            console.error('Error deleting document from reminders collection:', error);
          }
        });
      } else {
        console.error('No matching document found in reminders collection');
      }
    } catch (error) {
      console.error('Error querying reminders collection:', error);
    }
  }
  


}




