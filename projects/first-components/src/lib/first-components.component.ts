import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-firstComponents',
  template: `
    <p>
      first-components works!
    </p>
  `,
  styles: [
  ]
})
export class FirstComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
