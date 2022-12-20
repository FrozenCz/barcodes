import { Component, OnInit } from '@angular/core';
import {BarcodeService} from '../../services/barcode.service';
import {LocationModel} from '../../models/locationModel';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-locations-dashboard',
  templateUrl: './locations-dashboard.component.html',
  styleUrls: ['./locations-dashboard.component.scss']
})
export class LocationsDashboardComponent implements OnInit {
  locations: LocationModel[] = [];

  constructor(private barcodeService: BarcodeService) { }

  ngOnInit(): void {
    this.fetchList();
  }

  downloadList() {
      this.fetchList();
  }

  private fetchList(): void {
    firstValueFrom(this.barcodeService.getLocations()).then(locations => this.locations = locations);
  }




}
