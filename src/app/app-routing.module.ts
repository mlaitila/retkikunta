import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RetkikunnatComponent } from './retkikunnat/retkikunnat/retkikunnat.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'retkikunnat', component: RetkikunnatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
