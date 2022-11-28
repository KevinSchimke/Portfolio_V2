import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'dataprotection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
