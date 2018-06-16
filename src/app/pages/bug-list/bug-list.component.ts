import { Component, OnInit } from '@angular/core';
import { BugServiceService } from '../../services/bug-service.service';
import { Bug } from './models/bug'


@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {

  constructor(private bugService : BugServiceService) { }
  bugs : Bug[] = [];
  bugName : string = "";
  bugSortAttr : string = 'name';
	bugSortDescending : boolean = false;


  AddBug()
  {
    let newBug : Bug = {
			name : this.bugName,
      isClosed : false,
      createdAt : new Date()
		};
    this.bugService.add(newBug);
    this.getBugs();
  }

  clearBugs()
  {
    this.bugService.clear();
    this.getBugs();
  }

  toggleBug(bug : Bug)
  {
    bug.isClosed = !bug.isClosed;
    this.bugService.update(bug);
    this.getBugs();
  }

  getBugs()
  {
    this.bugs = this.bugService.get();
    console.table(this.bugs);
  }

  OnRemoveCloasedClick()
  {
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  getClosedBugsCount() : number
  {
    return this.bugService.getClosedBugsCount();
  }

  OnOrderByChange(orderBy : string)
  {
    console.log(orderBy);

    switch(orderBy)
    {
      case 'name':
      this.bugs.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      break;
      case 'isClosed':
      this.bugs.sort(function(a, b) {
        var nameA = a.isClosed; // ignore upper and lowercase
        var nameB = b.isClosed; // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      break;
    }
    
    
  }

  ngOnInit() {
    this.getBugs();
  }

}
