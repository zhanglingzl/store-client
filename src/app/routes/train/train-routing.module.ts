import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainTextComponent} from './train-text/train-text.component';
import {TrainVideoComponent} from './train-video/train-video.component';

const routes: Routes = [
    { path: 'text', component: TrainTextComponent },
    { path: 'video', component: TrainVideoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainRoutingModule { }
