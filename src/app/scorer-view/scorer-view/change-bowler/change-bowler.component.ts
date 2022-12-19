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
  selector: 'crx-change-bowler',
  templateUrl: './change-bowler.component.html',
  styleUrls: ['./change-bowler.component.scss'],
})
export class ChangeBowlerComponent implements OnInit {
  constructor(
    private matchDataService: MatchDataServiceService,
    public dialogRef: MatDialogRef<ChangeBowlerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  players: Player[] = [];
  filteredPlayers?: Observable<Player[]>;

  myControl = new FormControl('');

  /* options: string[] = ['One', 'Two', 'Three'];
  filteredOptions?: Observable<string[]>; */

  ngOnInit() {
    this.getBowlers();
    this.filteredPlayers = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterPlayers(value || ''))
    );
  }

  /* private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  } */

  private _filterPlayers(value: string): Player[] {
    const filterValue = value.toString().toLowerCase();

    return this.players.filter((player) =>
      player.name.toString().toLowerCase().includes(filterValue)
    );
  }

  displayFn(player: Player): string {
    return player && player.name ? player.name : '';
  }

  getBowlers(): void {
    this.matchDataService
      .getBowlingTeamPlayers()
      .subscribe((p) => (this.players = p));
  }

  save() {
    if (this.myControl.value) {
      this.dialogRef.close(this.myControl.value);
    }
  }
}
