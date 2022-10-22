import { Component, OnInit, Input } from '@angular/core';
import { Over } from '../../i/over';
import { OverData } from '../../i/over-data';

@Component({
  selector: 'crx-over-card',
  templateUrl: './over-card.component.html',
  styleUrls: ['./over-card.component.scss'],
})
export class OverCardComponent implements OnInit {
  @Input() over: Over = { overNumber: 0, balls: [] };
  @Input() currentOver?: OverData;

  constructor() {}

  ngOnInit(): void {}
}
