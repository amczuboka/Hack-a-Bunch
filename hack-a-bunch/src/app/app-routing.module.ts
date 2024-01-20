import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MortgageInfoComponent } from './pages/mortgage-info/mortgage-info.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'mortgage-info', component: MortgageInfoComponent },
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
