import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play/play.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    CommonModule, RouterModule.forChild([{ path: '', component: PlayComponent }])
  ]
})
export class PlayModule { }
