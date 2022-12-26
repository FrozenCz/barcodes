import {Component, Inject, Input, OnInit} from '@angular/core';
import {LocationModel} from '../../models/locationModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BarcodeService} from '../../services/barcode.service';
import {firstValueFrom, noop} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-locations-uuid-edit',
  templateUrl: './locations-uuid-edit.component.html',
  styleUrls: ['./locations-uuid-edit.component.scss']
})
export class LocationsUuidEditComponent implements OnInit {
  @Input() locationModel: LocationModel | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { locationModel: LocationModel },
              private matDialogRef: MatDialogRef<LocationsUuidEditComponent>,
              private barcodeService: BarcodeService,
              private _snackbar: MatSnackBar
  ) {
    this.locationModel = data.locationModel;
  }

  ngOnInit(): void {
  }

  onKeyUp($event: KeyboardEvent, locationModel: LocationModel) {
    if ($event.code === 'Enter') {
      this.saveNfcId(locationModel);
    }
  }

  saveNfcId(locationModel: LocationModel) {
    firstValueFrom(this.barcodeService.saveNfc(locationModel)).then(() => {
      this._snackbar.open('NFC tag změněn', 'zavřít', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 2000
      }),
        this.matDialogRef.close();
    }, reason => {
      alert(reason)
    })
  }
}
