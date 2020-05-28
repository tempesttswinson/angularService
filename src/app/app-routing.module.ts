import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//imports your Components that are used in your routes array
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { HomeCompComponent } from './home-comp/home-comp.component';

//holds an array of routes
const routes: Routes = [
  { path: '', component: HomeCompComponent },//set as default(home page)
  { path: 'one', component: CompOneComponent },
  { path: 'two', component: CompTwoComponent },
  { path: 'three', component: CompThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
