import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HienthiComponent } from './hienthi/hienthi.component';


const routes: Routes = [{path:'hienthi', component:HienthiComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
