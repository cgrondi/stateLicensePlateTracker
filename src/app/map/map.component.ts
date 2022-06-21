import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { StatesTrackerService } from '../_services/states-tracker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private statesArr;

  constructor(private statesTracker: StatesTrackerService, @Inject(DOCUMENT) document: Document) { }

  ngOnInit(): void {
    this.statesArr = this.statesTracker.getStatesTracker();
    for(var i=0; i<this.statesArr.length; i++){
      if(this.statesArr[i].found){
        document.getElementById(this.statesArr[i].stateName).classList.add('found');
      }
    }
  }

  getName(event){
    console.log(event.target.querySelector('title').innerHTML)
  }

}
