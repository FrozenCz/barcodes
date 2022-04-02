import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarcodeDashboardComponent} from './components/barcode-dashboard/barcode-dashboard.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: BarcodeDashboardComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
