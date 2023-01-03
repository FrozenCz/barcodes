import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Barcode} from '../../models/barcode.model';
import {animate, query, state, style, transition, trigger} from '@angular/animations';
import {LocationModel} from '../../models/locationModel';

@Component({
  selector: 'app-barcode-list',
  templateUrl: './barcode-list.component.html',
  styleUrls: ['./barcode-list.component.scss'],
  animations: [trigger('dialogAnim', [
    state('in', style({opacity: 1})),
    transition('void=>*', [
      query('mat-card', style({opacity: 0, transform: 'translateY(-100px) scale(0)'})),
      animate(200, style({opacity: 1})),
      query('mat-card', animate(200, style({opacity: 1, transform: 'translateY(0) scale(1)'}))),
    ]),
    transition('*=>void', [
      query('mat-card', animate(200, style({opacity: 0, transform: 'translateY(-100px) scale(0)'}))),
      animate(200, style({opacity: 0})),

    ])
  ])]
})
export class BarcodeListComponent {
  @Input() barcodes: Barcode[] = [];
  @Input() locations: LocationModel[] = [];
  @Output() emitDelete: EventEmitter<Barcode> = new EventEmitter<Barcode>();
  @Output() emitLocationChanged: EventEmitter<{locationUuid: string, barcodeId: number}> = new EventEmitter();
  codeShowing: Barcode | null = null;
  codeShowingJSOn: string = '';

  showCode(barcode: Barcode): void {
    this.codeShowingJSOn = JSON.stringify({id: barcode.id});
    this.codeShowing = barcode
  }

  deleteBarcode(barcode: Barcode): void {
    this.emitDelete.emit(barcode);
  }

  onLocationChanged(barcodeId: number, locationUuid: string): void {
    this.emitLocationChanged.emit({barcodeId, locationUuid})
  }

}
