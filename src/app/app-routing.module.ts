import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdetailsComponent } from './cdetails/cdetails.component';

const routes: Routes = [
  {path:"cd",component:CdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
