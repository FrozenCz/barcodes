import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Barcode} from '../../models/barcode.model';
import {BarcodeService} from '../../services/barcode.service';
import {combineLatest, firstValueFrom, take} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {LocationModel} from '../../models/locationModel';
import {$e} from '@angular/compiler/src/chars';

@Component({
  selector: 'app-barcode-dashboard',
  templateUrl: './barcode-dashboard.component.html',
  styleUrls: ['./barcode-dashboard.component.scss'],
  animations: [trigger('toastAnim', [
    state('in', style({opacity: 1})),
    transition('void=>*', [
      style({transform: 'translateX(100px)', opacity: 0}),
      animate(150, style({transform: 'translateX(-20px)', opacity: 1})),
      animate(20, style({transform: 'translateX(10px)', opacity: 1})),
      animate(10)
    ]),
    transition('*=>void', [
      animate(200, style({transform: 'translateX(100px)', opacity: 0}))
    ])
  ])]
})

export class BarcodeDashboardComponent implements OnInit {
  barcodes: Barcode[] = [];
  locations: LocationModel[] = [];
  toastMessage: string | null = null;
  timer: any | null = null;
  toastClass: string = 'basic';

  constructor(private barcodeService: BarcodeService, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.fetchCodes()
  }

  downloadList(): void {
    this.fetchCodes()
  }

  fetchCodes(info?: boolean): void {
    firstValueFrom(combineLatest([this.barcodeService.getBarcodes(), this.barcodeService.getLocations()]))
      .then(([bs, locations]) => {
        if (info) {
          this.showToaster('Data byla stažena', 'success');
        }
        this.barcodes = bs;
        this.locations = locations;
      })
  }

  showToaster(message: string, toastClass: string): void {
    this.toastMessage = message;
    this.toastClass = toastClass;
    if (this.timer) {
      this.timer.clearTimeout();
    }
    this.timer = setTimeout(() => {
      this.toastMessage = null;
      this.timer = null;
    }, 3000)
  }

  reset(): void {
    this.barcodeService.reset().subscribe(() => {
      this.showToaster('Resetováno', '');
      this.fetchCodes();
    });
  }

  onDeleteEmitted($event: Barcode): void {
    firstValueFrom(this.barcodeService.deleteBarcode($event)).then(() => this.fetchCodes());
  }
}
