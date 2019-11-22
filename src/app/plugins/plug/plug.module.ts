import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlugComponent } from './plug/plug.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlugComponent],
  imports: [
    CommonModule, RouterModule.forChild([{ path: '', component: PlugComponent }])
  ]
})
export class PlugModule { }
