import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './components/login/login.module';
import { LoginComponent } from './components/login/login.component';
import { HomeModule } from './components/home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:()=> import('./components/home/home.module').then(m => HomeModule)
  },
  {
    path: 'logar',
    loadChildren:()=> import('./components/login/login.module').then(m => LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }