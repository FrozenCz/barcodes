import {Component, Input, OnInit} from '@angular/core';
import {LocationsModel} from '../../models/locations.model';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {
  @Input() locations: LocationsModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
