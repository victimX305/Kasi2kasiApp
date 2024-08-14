import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class eventService {
    private currentUser: firebase.default.User | null = null;

    getCurrentUser(): firebase.default.User | null {
        return this.currentUser
    }

    setCurrentUser(user: firebase.default.User) {
        this.currentUser = user;
    }
}