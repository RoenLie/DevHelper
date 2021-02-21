import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: "app-page-scripts-portal",
  templateUrl: './scripts-portal.component.html',
  styleUrls: ['./scripts-portal.component.scss']
})
export class ScriptsPortalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
