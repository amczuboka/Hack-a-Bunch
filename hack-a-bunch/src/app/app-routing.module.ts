import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { CarPaymentsComponent } from './pages/car-payments/car-payments.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'car-payments', component: CarPaymentsComponent },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
