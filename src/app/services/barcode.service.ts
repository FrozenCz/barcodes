import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Barcode} from '../models/barcode.model';
import {LocationModel} from '../models/locationModel';
import {restUrl} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
  constructor(private httpClient: HttpClient) {
  }


  getBarcodes(): Observable<Barcode[]> {
    return this.httpClient.get<Barcode[]>(restUrl + '/barcodes');
  }

  createBarcode(newName: string): Observable<Barcode> {
    return this.httpClient.post<Barcode>(restUrl + '/barcodes', {name: newName})
  }

  reset(): Observable<void> {
    return this.httpClient.get<void>(restUrl + '/barcodes/reset');
  }

  setLocation(barcodeId: number, locationUuid: string): Observable<LocationModel> {
    return this.httpClient.patch<LocationModel>(restUrl + '/barcodes/' + barcodeId, {locationUuid})
  }

  getLocations(): Observable<LocationModel[]> {
    return this.httpClient.get<LocationModel[]>(restUrl + '/locations');
  }

  createLocation(newName: string): Observable<LocationModel> {
    return this.httpClient.post<LocationModel>(restUrl + '/locations', {name: newName});
  }

  deleteBarcode($event: Barcode): Observable<void> {
    return this.httpClient.delete<void>(restUrl + '/barcodes/' + $event.id);
  }


  saveNfc(locationModel: LocationModel): Observable<void> {
    return this.httpClient.patch<void>(restUrl + '/locations/' + locationModel.uuid, {nfcId: locationModel.nfcId});
  }
}
