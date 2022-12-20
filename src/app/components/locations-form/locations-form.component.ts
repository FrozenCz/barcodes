import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BarcodeService} from '../../services/barcode.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-locations-form',
  templateUrl: './locations-form.component.html',
  styleUrls: ['./locations-form.component.scss']
})
export class LocationsFormComponent implements OnInit {

  @Output() emitnew: EventEmitter<void> = new EventEmitter<void>();
  newName: string = '';

  constructor(private barcodeService: BarcodeService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.barcodeService.createLocation(this.newName)
      .pipe(take(1))
      .subscribe(() => {
        this.newName = '';
        this.emitnew.emit();
      }, (err: any) => {
        console.log(err);
      })

  }

}
