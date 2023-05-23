
import { Component, Input, ViewChild} from '@angular/core';
import { ServizioService } from '../servizio.service';
import { RegistroComponent } from '../registro/registro.component';
import { studente } from '../studenti';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-alunno',
  templateUrl: './alunno.component.html',
  styleUrls: ['./alunno.component.css']
})
export class AlunnoComponent {
  @ViewChild("chart")
  chart!: ChartComponent;
  @Input() alunno: studente;
  
  public chartOptions: Partial<ChartOptions>;

  constructor(servizio: ServizioService){
    this.alunno = servizio.getStudente();

    this.chartOptions = {
      series: [
        {
          name: "voti",
          data: this.alunno.voti
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "voti",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      yaxis:{
        min:3,
        max:10
      }
      

  }
console.log(this.chartOptions);
}

ngOnInit(): void { }
}
