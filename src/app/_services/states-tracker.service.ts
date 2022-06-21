import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesTrackerService {

  private statesTracker: {stateName: string, found: boolean, truckFound: boolean}[] = [
    {
      stateName: "Alabama",
      found: false,
      truckFound: false
    },
    {
      stateName: "Alaska",
      found: false,
      truckFound: false
    },
    {
      stateName: "Arizona",
      found: false,
      truckFound: false
    },
    {
      stateName: "Arkansas",
      found: false,
      truckFound: false
    },
    {
      stateName: "California",
      found: false,
      truckFound: false
    },
    {
      stateName: "Colorado",
      found: false,
      truckFound: false
    },
    {
      stateName: "Connecticut",
      found: false,
      truckFound: false
    },
    {
      stateName: "Delaware",
      found: false,
      truckFound: false
    },
    {
      stateName: "DC",
      found: false,
      truckFound: false
    },
    {
      stateName: "Florida",
      found: false,
      truckFound: false
    },
    {
      stateName: "Georgia",
      found: false,
      truckFound: false
    },
    {
      stateName: "Hawaii",
      found: false,
      truckFound: false
    },
    {
      stateName: "Idaho",
      found: false,
      truckFound: false
    },
    {
      stateName: "Illinois",
      found: false,
      truckFound: false
    },
    {
      stateName: "Indiana",
      found: false,
      truckFound: false
    },
    {
      stateName: "Iowa",
      found: false,
      truckFound: false
    },
    {
      stateName: "Kansas",
      found: false,
      truckFound: false
    },
    {
      stateName: "Kentucky",
      found: false,
      truckFound: false
    },
    {
      stateName: "Louisiana",
      found: false,
      truckFound: false
    },
    {
      stateName: "Maine",
      found: false,
      truckFound: false
    },
    {
      stateName: "Maryland",
      found: false,
      truckFound: false
    },
    {
      stateName: "Massachusetts",
      found: false,
      truckFound: false
    },
    {
      stateName: "Michigan",
      found: false,
      truckFound: false
    },
    {
      stateName: "Minnesota",
      found: false,
      truckFound: false
    },
    {
      stateName: "Mississippi",
      found: false,
      truckFound: false
    },
    {
      stateName: "Missouri",
      found: false,
      truckFound: false
    },
    {
      stateName: "Montana",
      found: false,
      truckFound: false
    },
    {
      stateName: "Nebraska",
      found: false,
      truckFound: false
    },
    {
      stateName: "Nevada",
      found: false,
      truckFound: false
    },
    {
      stateName: "New Hampshire",
      found: false,
      truckFound: false
    },
    {
      stateName: "New Jersey",
      found: false,
      truckFound: false
    },
    {
      stateName: "New Mexico",
      found: false,
      truckFound: false
    },
    {
      stateName: "New York",
      found: false,
      truckFound: false
    },
    {
      stateName: "North Carolina",
      found: false,
      truckFound: false
    },
    {
      stateName: "North Dakota",
      found: false,
      truckFound: false
    },
    {
      stateName: "Ohio",
      found: false,
      truckFound: false
    },
    {
      stateName: "Oklahoma",
      found: false,
      truckFound: false
    },
    {
      stateName: "Oregon",
      found: false,
      truckFound: false
    },
    {
      stateName: "Pennsylvania",
      found: false,
      truckFound: false
    },
    {
      stateName: "Rhode Island",
      found: false,
      truckFound: false
    },
    {
      stateName: "South Carolina",
      found: false,
      truckFound: false
    },
    {
      stateName: "South Dakota",
      found: false,
      truckFound: false
    },
    {
      stateName: "Tennessee",
      found: false,
      truckFound: false
    },
    {
      stateName: "Texas",
      found: false,
      truckFound: false
    },
    {
      stateName: "Utah",
      found: false,
      truckFound: false
    },
    {
      stateName: "Vermont",
      found: false,
      truckFound: false
    },
    {
      stateName: "Virginia",
      found: false,
      truckFound: false
    },
    {
      stateName: "Washington",
      found: false,
      truckFound: false
    },
    {
      stateName: "West Virginia",
      found: false,
      truckFound: false
    },
    {
      stateName: "Wisconsin",
      found: false,
      truckFound: false
    },
    {
      stateName: "Wyoming",
      found: false,
      truckFound: false
    },
    {
      stateName: "Canada",
      found: false,
      truckFound: false
    }
  ]

  public foundCountSubj = new Subject<number>();

  constructor(private router: Router) { }


  //returns the state in statesTracker whose stateName property matches name. if none found, console.logs
    //an error.
  getState(name: string){
    var result = this.statesTracker.filter(obj => {
      obj.stateName == name;
    });
    if(result){
      return result;
    }
    else{
      console.log('ERROR: state not found.');
    }
  }

  //gets a state from statesTracker whose stateName property matches name and returns the found property
    //of that state.
  getStateFound(name: string): boolean{
    var result = this.statesTracker.find(obj => {
      return obj.stateName == name;
    });
    if(result){
      return result.found;
    }
  }

  //gets a state from statesTracker whose stateName property matches name and returns the truckFound property
    //of that state.
  getTruckFound(name: string): boolean{
    var result = this.statesTracker.find(obj => {
      return obj.stateName == name;
    });
    if(result){
      return result.truckFound;
    }
  }

  //returns a copy of the array of states
  getStatesTracker(){
    return this.statesTracker.slice();
  }

  //gets a state whose stateName property matches name and sets found to true, calls getCount(), and
    //navigates back to /list
  findState(name: string){
    this.statesTracker = this.statesTracker.map(obj => {
      if(obj.stateName == name){
        console.log("Found " + name);
        return {...obj, found: true};
      }
      return obj;
    });
    this.getCount();
    this.router.navigate(['list']);
  }

  //gets a state whose stateName property matches name and sets found to false, calls getCount(), and
    //navigates back to /list
  unFindState(name: string){
    this.statesTracker = this.statesTracker.map(obj => {
      if(obj.stateName == name){
        console.log("Found " + name);
        return {...obj, found: false};
      }
      return obj;
    });
    this.getCount();
    this.router.navigate(['list']);
  }

  //gets a state whose stateName property matches name and sets truckFound to true, calls getCount(), and
    //navigates back to /list
  findTruck(name:string){
    console.log('truck found for ' + name)
    this.statesTracker = this.statesTracker.map(obj => {
      if(obj.stateName == name){
        console.log("Found " + name);
        return {...obj, truckFound: true};
      }
      return obj;
    });
    this.router.navigate(['list']);
  }

  //gets a state whose stateName property matches name and sets truckFound to false, calls getCount(), and
    //navigates back to /list
  unFindTruck(name: string){
    this.statesTracker = this.statesTracker.map(obj => {
      if(obj.stateName == name){
        console.log("Found " + name);
        return {...obj, truckFound: false};
      }
      return obj;
    });
    this.router.navigate(['list']);
  }

  //sets all states' found property to false and clears any array stored in local storage
  resetStates(){
    this.statesTracker = this.statesTracker.map(obj => {
      return {...obj, found: false, truckFound: false};
    });
    console.log("State tracker reset.");
    localStorage.removeItem('states');
    this.getCount();
  }

  //saves the current statesTracker array to local storage
  saveStates(){
    localStorage.setItem('states', JSON.stringify(this.statesTracker))
  }

  //tries to pull a statesTracker array from local storage and if one exists, sets this.statesTracker to
    //that array
  loadStates(){
    var temp;
    temp = JSON.parse(localStorage.getItem('states'))
    if(temp){
      this.statesTracker = temp;
      this.getCount();
    }
    else{
      console.log("No states data has been stored yet.");
    }
    this.getCount();
  }

  //logs this.statesTracker to the console
  logStates(){
    console.log(this.statesTracker);
  }

  //loops through this.statesTracker and if a state has the found property set to true, adds one to
    //foundCount. After finishing looping, calls next on foundCountSubj and passes foundCount.
  getCount(){
    let foundCount = 0;
    for (let index = 0; index < this.statesTracker.length; index++) {
      const element = this.statesTracker[index];
      if(element.found){
        foundCount++;
      }
    }
    this.foundCountSubj.next(foundCount);
  }


}
