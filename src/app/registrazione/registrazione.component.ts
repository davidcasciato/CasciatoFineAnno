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
  nome: string="";
  disabilitato: String ="disabled";

  constructor (public service:ServizioService)
  {
    this.testoBottone = "Premi per validarti";
    this.service.setAbilita(false);
  }


  abilita()
  {
      if (this.username == "DAVID" &&  this.password == "IO")
      {
        this.nome = "/registro";
        this.testoBottone = "ENTRA NEL REGISTRO";
        // abilitato l'utente alla visualizzazione
        this.service.setAbilita(true);
      }
  }
}
