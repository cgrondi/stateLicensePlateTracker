import { Component, OnInit } from '@angular/core';
import { StatesTrackerService } from './_services/states-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private statesTracker: StatesTrackerService){}

  ngOnInit(): void {
    this.statesTracker.loadStates();
    setTimeout(() => {
      this.statesTracker.getCount();
    }, 500);
  }
  title = 'StatesMap';


}
