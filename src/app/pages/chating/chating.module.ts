

  //import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatingPageRoutingModule } from './chating-routing.module';

import { ChatingPage } from './chating.page';
import { ChatBoxComponent } from 'src/app/components/chat-box/chat-box.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ImageViewerComponent } from 'src/app/components/image-viewer/image-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatingPageRoutingModule,
    ComponentsModule

   
  ],
  declarations: [ChatingPage, ChatBoxComponent, ImageViewerComponent]
})
export class ChatingPageModule {}