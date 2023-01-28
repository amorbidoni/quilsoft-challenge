import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss']
})
export class HeaderBackComponent implements OnInit {
  @Input() route!:Routes;
  constructor() { }

  ngOnInit(): void {
  }

}
