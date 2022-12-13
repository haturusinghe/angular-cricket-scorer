import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/service/auth-service.service';

@Component({
  selector: 'crx-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss'],
})
export class DashHomeComponent implements OnInit {
  links = [
    { name: 'Home', isActive: false, icon: 'home' },
    { name: 'My Profile', isActive: false, icon: 'person' },
    { name: 'Score', isActive: false, icon: 'sports_cricket' },
    { name: 'Live Scores', isActive: false, icon: 'scoreboard' },
  ];

  showFiller = false;
  constructor(private auth: AuthServiceService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.signOut();
  }
}
