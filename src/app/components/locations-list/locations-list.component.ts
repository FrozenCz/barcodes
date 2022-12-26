import {Component, Input, OnInit} from '@angular/core';
import {LocationModel} from '../../models/locationModel';
import {MatDialog} from '@angular/material/dialog';
import {LocationsUuidEditComponent} from '../locations-uuid-edit/locations-uuid-edit.component';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {
  @Input() locations: LocationModel[] = [];
  editedLocation: LocationModel | null = null;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(locationModel: LocationModel): void {
    this.dialog.open(LocationsUuidEditComponent, {
      data: {locationModel: locationModel}
    })
  }


}
