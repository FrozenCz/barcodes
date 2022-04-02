import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Barcode} from '../models/barcode.model';


@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  constructor(private httpClient: HttpClient) {


  }

  getBarcodes(): Observable<Barcode[]> {
    return this.httpClient.get<Barcode[]>('http://barcodes-rest.milanknop.cz/barcodes');
  }

  createBarcode(newName: string): Observable<Barcode> {
    return this.httpClient.post<Barcode>('http://barcodes-rest.milanknop.cz/barcode', {name: newName})
  }
}
