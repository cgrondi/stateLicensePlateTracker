import { Component, OnInit } from '@angular/core';
import { StatesTrackerService } from '../_services/states-tracker.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private statesTracker: StatesTrackerService) { }

  ngOnInit(): void {
  }

  saveStates(){
    this.statesTracker.saveStates();
    console.log("saveStates called");
  }

  loadStates(){
    this.statesTracker.loadStates()
    console.log("loadStates called");
  }

  resetStates(){
    this.statesTracker.resetStates();
  }

}
