import { LocationStrategy } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StatesTrackerService } from '../_services/states-tracker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  count:number = 0;
  countSubscription: Subscription;

  constructor(private url: LocationStrategy, private statesTracker: StatesTrackerService) { }

  ngOnInit(): void {
    this.countSubscription = this.statesTracker.foundCountSubj.subscribe(count => {
      this.count = count;
    })
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }
}
