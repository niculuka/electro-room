import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Overlayer } from '../models/overlayer.model';

@Injectable({
  providedIn: 'root'
})
export class OverlayerService {

    public overlayer: Overlayer = new Overlayer();
    private overlayerSubject = new BehaviorSubject(this.overlayer);

    handleOverlayerService() {
        this.overlayerSubject.next(this.overlayer);
    }

    getOverlayerObservable(): Observable<any> {
        return this.overlayerSubject.asObservable();
    }
}
