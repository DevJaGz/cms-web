import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/shared/components/card/interfaces/card.interface';
import { cardsContent } from './constants/cards-content.constant';

@Component({
  selector: 'app-cms-populares',
  templateUrl: './cms-populares.component.html',
  styleUrls: ['./cms-populares.component.scss'],
})
export class CmsPopularesComponent implements OnInit {
  cardsContent: ICard[] = cardsContent;
  constructor() {}

  ngOnInit(): void {}
}
