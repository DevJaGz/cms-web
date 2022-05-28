import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() url: string = '';

  constructor() {}

  ngOnInit(): void {}
}
