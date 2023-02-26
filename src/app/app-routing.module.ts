import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [{
  path : 'image', component : PhotosComponent
  },{
  path : 'details', component : DetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
