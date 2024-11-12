import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ScorekaartKandidaat-new',
  templateUrl: './ScorekaartKandidaat-new.component.html',
  styleUrls: ['./ScorekaartKandidaat-new.component.scss']
})
export class ScorekaartKandidaatNewComponent {
  @ViewChild("ScorekaartKandidaatForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}