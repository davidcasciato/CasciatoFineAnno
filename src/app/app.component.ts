import { Component } from '@angular/core';
import { ServizioService } from './servizio.service';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'casciatoRegistro';

  constructor(public ss: ServizioService){

  }

}
