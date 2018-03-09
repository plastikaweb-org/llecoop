import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [],
  exports: [FlexLayoutModule]
})
export class SharedModule {}
