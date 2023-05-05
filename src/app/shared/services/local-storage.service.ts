import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    public categ: any = this.getCategFromLocalStorage();
    private categSubject: BehaviorSubject<any> = new BehaviorSubject(this.categ);

    getCategObservable(): Observable<any> {
        return this.categSubject.asObservable();
    }

    getCateg(): any {
        return this.categSubject.value;
    }

    sendItem(item: any) {
        this.categ = item;
        const categDepart = JSON.stringify(this.categ);
        localStorage.setItem('categ-depart', categDepart);
        this.categSubject.next(this.categ);
    }

    private getCategFromLocalStorage(): any {
        const categDepart = localStorage.getItem('categ-depart');
        return categDepart ? JSON.parse(categDepart).type : "";
    }
}