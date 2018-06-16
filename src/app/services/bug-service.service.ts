import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugServiceService {

  
  constructor() { }

  bugKey = 'bugs';
  add(bug : any)
  {
    let bugString = localStorage.getItem(this.bugKey);
    let bugs = [];
    if(bugString != null)
    {
      bugs = JSON.parse(bugString);
    }
    bugs.push(bug);
    localStorage.setItem(this.bugKey,JSON.stringify(bugs));
  }

  get() : any[]
  {
    return JSON.parse(localStorage.getItem(this.bugKey));
  }

  clear() : void
  {
    localStorage.removeItem(this.bugKey);
  }

  update(bug : any)
  {
    let bugs = this.get();
    let bugEntity = bugs.filter(function (a) {
      if(a.name == bug.name)
      {
        return a;
      }
    })[0];

    let index = bugs.indexOf(bugEntity);
    bugs[index] = bug;
    localStorage.setItem(this.bugKey,JSON.stringify(bugs));
  }

  getClosedBugsCount() : number
  {
    let bugs = this.get();
    return bugs.reduce((count, item) => item.isClosed ? ++count : count );
  }
}
