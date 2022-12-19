import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Player } from '../i/player';
import { MatchDataServiceService } from '../services/match-data-service.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from '../i/dialog-data';

@Component({
  selector: 'crx-change-batsman',
  templateUrl: './change-batsman.component.html',
  styleUrls: ['./change-batsman.component.scss'],
})
export class ChangeBatsmanComponent implements OnInit {
  constructor(
    private matchDataService: MatchDataServiceService,
    public dialogRef: MatDialogRef<ChangeBatsmanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  players: Player[] = [];
  filteredPlayers?: Observable<Player[]>;

  myControl = new FormControl('');

  ngOnInit() {
    this.getBatsmen();
    this.filteredPlayers = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterPlayers(value || ''))
    );
  }

  turnToLowerCase(str: string): string {
    if (str) {
      return str.toString().toLowerCase();
    } else {
      return '';
    }
  }

  private _filterPlayers(value: string): Player[] {
    const filterValue = this.turnToLowerCase(value);

    return this.players.filter((player) =>
      player.name.toString().toLowerCase().includes(filterValue)
    );
  }

  displayFn(player: Player): string {
    return player && player.name ? player.name : '';
  }

  getBatsmen(): void {
    this.matchDataService
      .getBattingTeamPlayers()
      .subscribe((p) => (this.players = p));
  }

  save() {
    if (this.myControl.value) {
      this.dialogRef.close(this.myControl.value);
    }
  }
}
