import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SCOREKAARTKANDIDAAT_MODULE_DECLARATIONS, ScorekaartKandidaatRoutingModule} from  './ScorekaartKandidaat-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ScorekaartKandidaatRoutingModule
  ],
  declarations: SCOREKAARTKANDIDAAT_MODULE_DECLARATIONS,
  exports: SCOREKAARTKANDIDAAT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScorekaartKandidaatModule { }