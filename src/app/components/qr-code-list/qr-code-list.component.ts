import { Component, OnInit } from '@angular/core';
import {BarcodeService} from '../../services/barcode.service';
import {Barcode} from '../../models/barcode.model';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-qr-code-list',
  templateUrl: './qr-code-list.component.html',
  styleUrls: ['./qr-code-list.component.scss']
})
export class QrCodeListComponent implements OnInit {
  barcodes: Barcode[] = [];

  constructor(private barcordeService: BarcodeService) { }

  ngOnInit(): void {
    firstValueFrom(this.barcordeService.getBarcodes()).then((barcodes) => {
      this.barcodes = barcodes;
    })
  }


  codeShowingJSOn(barcode: Barcode): string {
    return JSON.stringify(barcode);
  }
}
