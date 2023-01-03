import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BarcodeDashboardComponent} from './components/barcode-dashboard/barcode-dashboard.component';
import {BarcodeListComponent} from './components/barcode-list/barcode-list.component';
import {BarcodeFormComponent} from './components/barcode-form/barcode-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {QRCodeModule} from 'angularx-qrcode';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LocationsDashboardComponent} from './components/locations-dashboard/locations-dashboard.component';
import {LocationsFormComponent} from './components/locations-form/locations-form.component';
import {LocationsListComponent} from './components/locations-list/locations-list.component';
import {MatSelectModule} from '@angular/material/select';
import {LocationsUuidEditComponent} from './components/locations-uuid-edit/locations-uuid-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { QrCodeListComponent } from './components/qr-code-list/qr-code-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeDashboardComponent,
    BarcodeListComponent,
    BarcodeFormComponent,
    LocationsDashboardComponent,
    LocationsFormComponent,
    LocationsListComponent,
    LocationsUuidEditComponent,
    QrCodeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    QRCodeModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
