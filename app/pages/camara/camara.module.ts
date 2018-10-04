import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { CamaraComponent } from './camara.component';

import { CamaraRoutingModule } from './camara.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    CamaraRoutingModule
  ],
  declarations: [
    CamaraComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CamaraModule { }