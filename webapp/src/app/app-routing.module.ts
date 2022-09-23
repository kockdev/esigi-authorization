import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleRegisterComponent } from './modules/security-access/module-and-scren-register/module-register.component';
import { ProfileRegisterComponent } from './modules/security-access/profile-register/profile-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'modulos',
    pathMatch: 'full',
  },
  {
    path: 'modulos',
    component: ModuleRegisterComponent,
  },
  {
    path: 'modulos',
    component: ModuleRegisterComponent,
  },
  {
    path: 'perfis',
    component: ProfileRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
