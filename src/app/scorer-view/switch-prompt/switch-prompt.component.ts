import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Player } from '../i/player';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from '../i/dialog-data';

@Component({
  selector: 'crx-switch-prompt',
  templateUrl: './switch-prompt.component.html',
  styleUrls: ['./switch-prompt.component.scss'],
})
export class SwitchPromptComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SwitchPromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  yes() {
    this.dialogRef.close({
      switch: true,
    });
  }

  no() {
    this.dialogRef.close({
      switch: false,
    });
  }
}
