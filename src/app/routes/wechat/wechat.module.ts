import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { WeUiModule } from 'ngx-weui';

import { AuthCodeComponent } from './auth/auth-code/auth-code.component';
import { RootComponent } from './root/root.component';
import { WechatAuthComponent } from './auth/wechat-auth/wechat-auth.component';

import { WechatRoutingModule } from './wechat-routing.module';
import { AuthInfoComponent } from './auth/auth-info/auth-info.component';
import { WechatHomeComponent } from './wechat-home/wechat-home.component';

const COMPONENTS = [
  RootComponent,
  WechatAuthComponent,
  AuthCodeComponent,
  AuthInfoComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    WechatRoutingModule,
    WeUiModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    WechatHomeComponent,



  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class WechatModule { }
