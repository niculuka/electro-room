import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MobileMenuService {

    public isMobileMenuOpen: boolean = false;
    private isMobileMenuOpenSubject = new BehaviorSubject(this.isMobileMenuOpen);

    handleMobileMenuService() {
        this.isMobileMenuOpenSubject.next(this.isMobileMenuOpen);
    }

    getHandleMobileMenuObservable(): Observable<any> {
        return this.isMobileMenuOpenSubject.asObservable();
    }

}