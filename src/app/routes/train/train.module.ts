import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TrainRoutingModule } from './train-routing.module';
import { TrainTextComponent } from './train-text/train-text.component';
import { TrainVideoComponent } from './train-video/train-video.component';

const COMPONENT_NOROUNT = [
    TrainTextComponent,
    TrainVideoComponent
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
