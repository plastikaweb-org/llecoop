import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCovalentModule } from '../material-covalent/material-covalent.module';

@NgModule({
  imports: [ CommonModule, FlexLayoutModule, MaterialCovalentModule ],
  exports: [ FlexLayoutModule, MaterialCovalentModule ]
})
export class SharedModule {}
