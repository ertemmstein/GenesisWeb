import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title = 'app';
 

  ngOnInit(): void {
  }

  currentYearLong(): number {
    return new Date().getFullYear();
  }
}
