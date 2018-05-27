import { NgModule } from '@angular/core';

import { TrainRoutingModule } from './train-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';
import { TextListComponent } from './text/text-list/text-list.component';
import { VideoListComponent } from './video/video-list/video-list.component';

@NgModule({
  imports: [
    SharedModule,
    TrainRoutingModule
  ],
  declarations: [TextComponent, VideoComponent, TextListComponent, VideoListComponent]
})
export class TrainModule { }
