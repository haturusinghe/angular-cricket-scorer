import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/service/auth-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'crx-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss'],
})
export class DashHomeComponent implements OnInit {
  time = new Date();
  rxTime = new Date();
  intervalId;

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

  subscription: Subscription = new Subscription();

  showFiller = false;
  constructor(private auth: AuthServiceService, private router: Router) {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnInit(): void {
    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        let hour = this.rxTime.getHours();
        let minuts = this.rxTime.getMinutes();
        let seconds = this.rxTime.getSeconds();
        //let a = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        let NewTime = hour + ':' + minuts + ':' + seconds;
        // console.log(NewTime);
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  logout() {
    this.auth.signOut();
  }

  navHome() {
    this.router.navigate(['dashboard/start']);
  }

  getLink(link: any) {
    this.router.navigate([link.route]);
  }
}
