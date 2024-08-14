import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByMostRecent',
})
export class OrderByMostRecentPipe implements PipeTransform {
  transform(rooms: any[]): any[] {
    if (!rooms || rooms.length === 0) {
      return rooms;
    }

    // Sort the rooms based on the most recent message timestamp
    rooms.sort((a, b) => {
      const aTimestamp = this.getMostRecentTimestamp(a);
      const bTimestamp = this.getMostRecentTimestamp(b);
      return bTimestamp - aTimestamp;
    });

    return rooms;
  }

  getMostRecentTimestamp(room: any): number {
    if (room && room.messages && room.messages.length > 0) {
      const mostRecentMessage = room.messages[room.messages.length - 1];
      return mostRecentMessage.timestamp;
    }
    return 0;
  }
  /*getMostRecentTimestamp(item: any): number {
    if (item && item.messages && item.messages.length > 0) {
      const mostRecentMessage = item.messages[item.messages.length - 1];
      return mostRecentMessage.timestamp;
    }
    return 0; // You can return a default value if there are no messages
  }*/
}
