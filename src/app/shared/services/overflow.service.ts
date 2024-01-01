import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverflowService {

    public isOverflowHidden: boolean = false;
    private isOverflowHiddenSubject = new BehaviorSubject(this.isOverflowHidden);

    handleOverflowService() {
        this.isOverflowHiddenSubject.next(this.isOverflowHidden);
    }

    getOverflowObservable(): Observable<any> {
        return this.isOverflowHiddenSubject.asObservable();
    }
}
