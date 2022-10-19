import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'crx-scorer-view',
  templateUrl: './scorer-view.component.html',
  styleUrls: ['./scorer-view.component.scss'],
})
export class ScorerViewComponent implements OnInit {
  currentStrikerControl = new FormControl('');
  player?: string;

  constructor() {}

  ngOnInit(): void {}
}
