import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineitemComponent } from '../wine/wine-item/wineitem.component';
import { WineNewReactiveComponent } from '../wine/wine-new/wine-new-reactive.component';
import { WinelistComponent } from '../wine/wine-list/winelist.component';
import { WineDetailComponent } from '../wine/wine-detail/wine-detail.component';


import { WineRoutingModule } from './wine-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WineitemComponent,
    WineNewReactiveComponent,
    WinelistComponent,
    WineDetailComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WineRoutingModule,
    RouterModule
  ]
})
export class WineModule { }
