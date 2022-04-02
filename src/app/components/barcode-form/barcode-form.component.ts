import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BarcodeService} from '../../services/barcode.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-barcode-form',
  templateUrl: './barcode-form.component.html',
  styleUrls: ['./barcode-form.component.scss']
})
export class BarcodeFormComponent implements OnInit {
  @Output() emitnew: EventEmitter<void> = new EventEmitter<void>();
  newName: string = '';

  constructor(private barcodeService: BarcodeService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.barcodeService.createBarcode(this.newName)
      .pipe(take(1))
      .subscribe(() => {
        this.emitnew.emit();
      }, (err: any) => {
        console.log(err);
      })

  }

}
