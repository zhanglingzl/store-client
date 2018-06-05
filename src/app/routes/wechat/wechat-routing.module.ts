import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthCodeComponent } from './auth/auth-code/auth-code.component';
import { AuthInfoComponent } from './auth/auth-info/auth-info.component';
import { RootComponent } from './root/root.component';
import { WechatAuthComponent } from './auth/wechat-auth/wechat-auth.component';
import { WechatGuardGuard } from './wechat-guard.guard';

const routes: Routes = [
  { path: 'auth_code', component: AuthCodeComponent, data: {title: 'RXR'}},
  { path: 'auth/info', component: AuthInfoComponent },
  { path: 'auth/:id', component: WechatAuthComponent, data: {title: 'RXR'}},
  { path: '', component: RootComponent, canActivate: [ WechatGuardGuard ], data: {title: '主页'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ WechatGuardGuard ]
})
export class WechatRoutingModule { }
