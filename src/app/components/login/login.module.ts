import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsloginComponent } from './formslogin/formslogin.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LembrarSenhaComponent } from './lembrar-senha/lembrar-senha.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    FormsloginComponent,
    RegistroUsuarioComponent,
    LembrarSenhaComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }

