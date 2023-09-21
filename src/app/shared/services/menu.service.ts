import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MenuService {

    // isMobileMenuOpen  ----------------------------------------------------------
    public isMobileMenuOpen: boolean = false;
    private isMobileMenuOpenSubject = new BehaviorSubject(this.isMobileMenuOpen);

    handleMobileMenuService() {
        this.isMobileMenuOpenSubject.next(this.isMobileMenuOpen);
    }

    handleMobileMenuObservable(): Observable<any> {
        return this.isMobileMenuOpenSubject.asObservable();
    }


    // isDesktopMenuOpen  ----------------------------------------------------------
    public isDesktopMenuOpen: boolean = false;
    private isDesktopMenuOpenSubject = new BehaviorSubject(this.isDesktopMenuOpen);

    handleDesktopMenuService() {
        this.isDesktopMenuOpenSubject.next(this.isDesktopMenuOpen);
    }

    handleDesktopMenuObservable(): Observable<any> {
        return this.isDesktopMenuOpenSubject.asObservable();
    }

}