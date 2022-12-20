import {Component, Input, OnInit} from '@angular/core';
import {LocationModel} from '../../models/locationModel';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {
  @Input() locations: LocationModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
