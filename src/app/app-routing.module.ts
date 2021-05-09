import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './My_Components/to-dos/to-dos.component';
import { AboutComponent } from './My_Components/about/about.component';

const routes: Routes = [
  { path: '', component: ToDosComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
