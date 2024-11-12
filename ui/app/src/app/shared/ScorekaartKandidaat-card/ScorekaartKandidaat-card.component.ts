import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ScorekaartKandidaat-card.component.html',
  styleUrls: ['./ScorekaartKandidaat-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ScorekaartKandidaat-card]': 'true'
  }
})

export class ScorekaartKandidaatCardComponent {


}