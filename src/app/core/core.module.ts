import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';

const EXPORT_COMPONENTS = [
  HeaderComponent
];


@NgModule({
  declarations: [
    EXPORT_COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EXPORT_COMPONENTS
  ]
})
export class CoreModule { }
