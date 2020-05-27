import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { HomeCompComponent } from './home-comp/home-comp.component';


const routes: Routes = [
  { path: '', component: HomeCompComponent },
  { path: 'one', component: CompOneComponent },
  { path: 'two', component: CompTwoComponent },
  { path: 'three', component: CompThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
