import { Component, OnInit, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styles: [
  ]
})
export class DonutsComponent implements OnInit {

  @Input() title: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: Label[] = ['sin info', 'no info', 'no da'];
  @Input('data') doughnutChartData: MultiDataSet = [[1, 1, 1]]

  public colors: Color[] =[
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059'] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
