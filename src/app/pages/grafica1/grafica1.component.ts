import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  // @Output() 
  
  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [
    [350, 450, 100]
  ];
  public data2 = [
    [453, 150, 120]
  ];
  public data3 = [
    [156, 230, 84]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
