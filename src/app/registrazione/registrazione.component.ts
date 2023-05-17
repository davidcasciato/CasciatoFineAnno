import { Component } from '@angular/core';
import { ServizioService } from '../servizio.service';

@Component({
  selector: 'app-login',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  
  username: string="";
  password: string="";
  testoBottone: string;

  constructor (public service:ServizioService)
  {
    this.testoBottone = "Premi per validarti";
    this.service.setAbilita(false);
  }


  abilita()
  {
      if (this.username.trim().toUpperCase() == "DAVID" &&  this.password == "IO")
      {

        this.testoBottone = "SEI validato";
        // abilitato l'utente alla visualizzazione
        this.service.setAbilita(true);
      }
  }
}
