import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponsivePage } from './responsive';

@NgModule({
  declarations: [
    ResponsivePage,
  ],
  imports: [
    IonicPageModule.forChild(ResponsivePage),
  ],
})
export class ResponsivePageModule {}
