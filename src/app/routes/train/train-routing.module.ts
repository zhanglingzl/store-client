import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextTrainListComponent} from "./text-train-list/text-train-list.component";
import {VideoTrainListComponent} from "./video-train-list/video-train-list.component";

const routes: Routes = [
    {path: "text", component: TextTrainListComponent},
    {path: 'video', component: VideoTrainListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainRoutingModule { }
