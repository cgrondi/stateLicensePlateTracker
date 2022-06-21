import { Component, OnInit } from '@angular/core';
import { StatesTrackerService } from '../_services/states-tracker.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private statesTracker: StatesTrackerService) { }

  ngOnInit(): void {
  }

  resetStates(){
    this.statesTracker.resetStates();
  }

  saveStates(){
    this.statesTracker.saveStates();
  }

  loadStates(){
    this.statesTracker.loadStates();
  }
}
