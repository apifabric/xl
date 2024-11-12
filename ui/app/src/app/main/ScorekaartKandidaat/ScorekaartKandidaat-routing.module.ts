import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorekaartKandidaatHomeComponent } from './home/ScorekaartKandidaat-home.component';
import { ScorekaartKandidaatNewComponent } from './new/ScorekaartKandidaat-new.component';
import { ScorekaartKandidaatDetailComponent } from './detail/ScorekaartKandidaat-detail.component';

const routes: Routes = [
  {path: '', component: ScorekaartKandidaatHomeComponent},
  { path: 'new', component: ScorekaartKandidaatNewComponent },
  { path: ':id', component: ScorekaartKandidaatDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ScorekaartKandidaat-detail-permissions'
      }
    }
  }
];

export const SCOREKAARTKANDIDAAT_MODULE_DECLARATIONS = [
    ScorekaartKandidaatHomeComponent,
    ScorekaartKandidaatNewComponent,
    ScorekaartKandidaatDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScorekaartKandidaatRoutingModule { }