import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail.component';

import { ItemsRoutingModule } from './item.routes';

import { ItemService } from './item.service';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemsComponent,
    ItemDetailComponent
  ],
  providers: [ItemService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemModule { }