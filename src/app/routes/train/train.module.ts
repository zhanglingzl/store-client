import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TrainRoutingModule } from './train-routing.module';
import { TextTrainListComponent } from './text-train-list/text-train-list.component';
import { VideoTrainListComponent } from './video-train-list/video-train-list.component';

const COMPONENT_NOROUNT = [
    TextTrainListComponent,
    VideoTrainListComponent
];

@NgModule({
  imports: [
    SharedModule,
    TrainRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class TrainModule { }
