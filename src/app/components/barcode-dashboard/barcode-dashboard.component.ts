import {Component, OnInit} from '@angular/core';
import {Barcode} from '../../models/barcode.model';
import {BarcodeService} from '../../services/barcode.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-barcode-dashboard',
  templateUrl: './barcode-dashboard.component.html',
  styleUrls: ['./barcode-dashboard.component.scss']
})
export class BarcodeDashboardComponent implements OnInit {
  barcodes: Barcode[] = [];

  constructor(private barcodeService: BarcodeService) {
  }

  ngOnInit(): void {
    this.fetchCodes()
  }

  downloadList(): void {
    this.fetchCodes()
  }

  private fetchCodes(): void {
    this.barcodeService.getBarcodes()
      .pipe(take(1))
      .subscribe(bs => {
        this.barcodes = bs;
      })
  }
}
