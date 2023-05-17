import { Injectable } from '@angular/core';
import { studente } from './studenti';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  idStudente: number;
  percorsoBase:string="./assets/";
  autorizzato: boolean;

  elencoStudenti: studente[] =
  [
  
  ]
  constructor() {
    this.idStudente = 4;
    this.autorizzato=false;
  }

  //Informa se l'utente è abilitato oppure no
  setAbilita(stato: boolean)
  {
    this.autorizzato = stato;
  }

  //informa se l'utente è stato riconosciuto
  getAbilita(): boolean
  {
      return this.autorizzato;
  }

  setStudente(selezione: number)
  {
    this.idStudente = selezione;
  }

  //restituisce un libro selezionato
  getStudente():studente {
    return this.elencoStudenti[this.idStudente];
  }
}