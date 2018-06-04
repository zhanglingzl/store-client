import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthCodeComponent } from './auth-code/auth-code.component';
import { RootComponent } from './root/root.component';
import { WechatAuthComponent } from './wechat-auth/wechat-auth.component';
import { WechatGuardGuard } from './wechat-guard.guard';

const routes: Routes = [
  { path: 'auth_code', component: AuthCodeComponent},
  { path: 'auth/:id', component: WechatAuthComponent },
  { path: '', component: RootComponent, canActivate: [ WechatGuardGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ WechatGuardGuard ]
})
export class WechatRoutingModule { }
