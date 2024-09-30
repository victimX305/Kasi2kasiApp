import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GigService {
  private gigCountSource = new BehaviorSubject<number>(0);
  currentGigCount = this.gigCountSource.asObservable();

  updateGigCount(count: number) {
    this.gigCountSource.next(count);
  }
}
