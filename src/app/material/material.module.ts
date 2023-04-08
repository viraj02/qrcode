import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material module
import { MatSidenavModule } from '@angular/material/sidenav';

const MATERIAL_MODULE = [
  MatSidenavModule
];


@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULE
  ],
  exports: [
    MATERIAL_MODULE
  ]
})
export class MaterialModule { }
