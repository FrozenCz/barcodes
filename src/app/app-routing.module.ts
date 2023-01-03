import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarcodeDashboardComponent} from './components/barcode-dashboard/barcode-dashboard.component';
import {LocationsDashboardComponent} from './components/locations-dashboard/locations-dashboard.component';
import {QrCodeListComponent} from './components/qr-code-list/qr-code-list.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: BarcodeDashboardComponent},
    {path: 'locations', component: LocationsDashboardComponent},
    {path: 'barcode-list', component: QrCodeListComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
