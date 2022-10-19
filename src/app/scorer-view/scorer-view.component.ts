import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
@Component({
  selector: 'crx-scorer-view',
  templateUrl: './scorer-view.component.html',
  styleUrls: ['./scorer-view.component.scss'],
})
export class ScorerViewComponent implements OnInit {
  // constructor(public dialog: MatDialog) {}
  constructor() {}

  ngOnInit(): void {}

  openDialog() {
    // const dialogRef = this.dialog.open(SettingsDialogComponent);
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
