import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextComponent} from './text/text.component';
import {TextListComponent} from './text/text-list/text-list.component';
import {VideoListComponent} from './video/video-list/video-list.component';
import {VideoComponent} from './video/video.component';

const routes: Routes = [
  { path: 'text', component: TextComponent, children: [
      { path: '', component:TextListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },
  { path: 'video', component: VideoComponent, children: [
      { path: '', component: VideoListComponent },
      // { path: ':id', component: UserViewComponent, data: { title: '在职代理'} }
    ] },

  // { path: '', redirectTo: 'text', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainRoutingModule { }
