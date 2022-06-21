import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatesTrackerService } from '../_services/states-tracker.service';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {

  stateName: string;
  constructor(private route: ActivatedRoute, private statesTracker: StatesTrackerService) { }

  ngOnInit(): void {
    this.stateName = this.route.snapshot.params['state'];
  }

  foundState(){
    this.statesTracker.findState(this.stateName);
  }

  didNotFindState(){
    this.statesTracker.unFindState(this.stateName);
  }

  checkStateTracker(){
    this.statesTracker.logStates();
  }

  foundTruck(){
    this.statesTracker.findTruck(this.stateName);
  }

  didNotFindTruck(){
    this.statesTracker.unFindTruck(this.stateName);
  }

}
