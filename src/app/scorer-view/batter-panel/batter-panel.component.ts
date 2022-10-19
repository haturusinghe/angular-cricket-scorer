import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crx-batter-panel',
  templateUrl: './batter-panel.component.html',
  styleUrls: ['./batter-panel.component.scss'],
})
export class BatterPanelComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['name', 'r', 'b', '_4s', '_6s', 'sr'];

  dataSource = BAT_DATA;
  constructor() {}

  ngOnInit(): void {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface BatterTableRow {
  name: string;
  r: number;
  b: number;
  _4s: number;
  _6s: number;
  sr: number;
}

const BAT_DATA: BatterTableRow[] = [
  { name: 'Jon Doe*', r: 4, b: 3, _4s: 1, _6s: 0, sr: 15.5 },
  { name: 'Foo Bar', r: 20, b: 30, _4s: 1, _6s: 1, sr: 55.6 },
];
