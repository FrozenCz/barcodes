import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Barcode} from '../models/barcode.model';


@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
  test$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {


  }

  getTest(): Observable<boolean> {
    return this.test$.asObservable()
  }

  getBarcodes(): Observable<Barcode[]> {
    return this.httpClient.get<Barcode[]>('https://barcodes-rest.milanknop.cz/barcodes');
  }

  createBarcode(newName: string): Observable<Barcode> {
    return this.httpClient.post<Barcode>('https://barcodes-rest.milanknop.cz/barcode', {name: newName})
  }

  reset(): Observable<void> {
    return this.httpClient.get<void>('https://barcodes-rest.milanknop.cz/barcodes/reset');
  }
}
