import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserToEventService {
    private newData: any;


    constructor() {
        // Initialize userData as an empty object when the service is created.
        this.newData = {};
    }

    // Set new data in the service
    setNewData(data: any) {
        this.newData = data;
    }

    // Get new data from the service
    getNewData() {
        return this.newData;
    }

    // Clear new data from the service
    clearNewData() {
        this.newData = {};
    }
}