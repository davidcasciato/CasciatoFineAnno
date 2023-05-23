
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
  media: number = 0;
  meddia:string="danger";
  tmp: number = 0;
  
  @ViewChild("chart")
  chart!: ChartComponent;
  @Input() alunno: studente;
  
  public chartOptions: Partial<ChartOptions>;

  constructor(servizio: ServizioService){
    
    this.alunno = servizio.getStudente();
    for (let i = 0; i< this.alunno.voti.length; i++){
      this.tmp += Number(this.alunno.voti[i]);
    }
    this.media = (this.tmp / this.alunno.voti.length);
    this.media = Math.round((this.media + Number.EPSILON) * 100) / 100;
    if (this.media >=6){
      this.meddia = "success"
    }
  
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
}

ngOnInit(): void { }
}
