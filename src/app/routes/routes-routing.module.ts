import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
import { UserLockComponent } from './passport/lock/lock.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserRegisterComponent } from './passport/register/register.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: '主页' } },
      // 业务子模块
      // { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' }
      { path: 'admin', loadChildren: './store/admin/admin.module#AdminModule'},
      { path: 'agency', loadChildren: './store/agency/agency.module#AgencyModule'},
      { path: 'guest', loadChildren: './store/guest/guest.module#GuestModule'},
      { path: 'product', loadChildren: './store/product/product.module#ProductModule'},
      { path: 'train', loadChildren: './store/train/train.module#TrainModule'}
    ]
  },
  // 全屏布局
  {
      path: 'wechat',
      component: LayoutFullScreenComponent,
      children: [
        {path:'', loadChildren: './wechat/wechat.module#WechatModule'}
      ]
  },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { title: '登录', titleI18n: 'pro-login' } },
      { path: 'register', component: UserRegisterComponent, data: { title: '注册', titleI18n: 'pro-register' } },
      { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果', titleI18n: 'pro-register-result' } }
    ]
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: 'lock', component: UserLockComponent, data: { title: '锁屏', titleI18n: 'lock' } },
  { path: '403', component: Exception403Component },
  { path: '404', component: Exception404Component },
  { path: '500', component: Exception500Component },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
