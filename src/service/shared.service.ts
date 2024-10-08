import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.dataSubject.asObservable();

  setData(data: any[]) {
    this.dataSubject.next(data);
  }

  getData(): any[] {
    return this.dataSubject.getValue();
  }
}
