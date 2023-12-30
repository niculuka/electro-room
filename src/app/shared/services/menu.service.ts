import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HandleWindow } from '../models/handle-window.model';

@Injectable({
    providedIn: 'root'
})

export class MenuService {

    public handleWindow: HandleWindow = new HandleWindow();
    private handleWindowSubject = new BehaviorSubject(this.handleWindow);

    handleWindowService() {
        this.handleWindowSubject.next(this.handleWindow);
    }

    getHandleWindowObservable(): Observable<any> {
        return this.handleWindowSubject.asObservable();
    }

}