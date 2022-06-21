import { Component, Input, OnInit } from '@angular/core';
import { StatesTrackerService } from '../_services/states-tracker.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  @Input() name: string;
  found: boolean;
  truckFound: boolean;

  constructor(private statesTracker: StatesTrackerService) { }

  ngOnInit(): void {
    this.found = this.statesTracker.getStateFound(this.name);
    this.truckFound = this.statesTracker.getTruckFound(this.name);
  }


}
