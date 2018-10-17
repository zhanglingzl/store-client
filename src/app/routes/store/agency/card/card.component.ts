import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<router-outlet></router-outlet>`,
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
