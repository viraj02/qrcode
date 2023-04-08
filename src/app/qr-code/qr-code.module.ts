import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ReaderComponent } from './reader/reader.component';

const COMPONENTS = [
  ReaderComponent,
];


@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class QrCodeModule { }
