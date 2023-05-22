import { Component, Input} from '@angular/core';
import { ServizioService } from '../servizio.service';
import { RegistroComponent } from '../registro/registro.component';
import { studente } from '../studenti';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
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
        height: 10,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      }

  }

}
ngOnInit(): void { }
}
