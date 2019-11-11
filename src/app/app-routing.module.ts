import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component'
import { from } from 'rxjs';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'list', component: ListComponent},
{path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
