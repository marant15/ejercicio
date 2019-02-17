import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'repositories', component: RepositoriesComponent},
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
