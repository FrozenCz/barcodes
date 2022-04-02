import {Component, Input, OnInit} from '@angular/core';
import {Barcode} from '../../models/barcode.model';
import {animate, query, state, style, transition, trigger} from '@angular/animations';

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
export class BarcodeListComponent implements OnInit {
  @Input() barcodes: Barcode[] = [];
  codeShowing: Barcode | null = null;
  codeShowingJSOn: string = '';


  constructor() {
  }

  ngOnInit(): void {
  }



  showCode(barcode: Barcode): void {
    this.codeShowingJSOn = JSON.stringify(barcode);
    this.codeShowing = barcode
  }


}
