import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/service/auth-service.service';

@Component({
  selector: 'crx-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss'],
})
export class DashHomeComponent implements OnInit {
  links = [
    { name: 'Home', isActive: false, icon: 'home', route: 'dashboard' },
    {
      name: 'My Profile',
      isActive: false,
      icon: 'person',
      route: 'dashboard/profile ',
    },
    {
      name: 'Score',
      isActive: false,
      icon: 'sports_cricket',
      route: 'dashboard/scorer',
    },
    {
      name: 'Live Scores',
      isActive: false,
      icon: 'scoreboard',
      route: 'live-scores',
    },
  ];

  showFiller = false;
  constructor(private auth: AuthServiceService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.signOut();
  }

  getLink(link: any) {
    this.router.navigate([link.route]);
  }
}
