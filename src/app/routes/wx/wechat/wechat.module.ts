import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AuthCodeComponent } from './auth-code/auth-code.component';
import { RootComponent } from './root/root.component';
import { WechatAuthComponent } from './wechat-auth/wechat-auth.component';

import { WechatRoutingModule } from './wechat-routing.module';

const COMPONENTS = [
  RootComponent,
  WechatAuthComponent,
  AuthCodeComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    WechatRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,


  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class WechatModule { }
