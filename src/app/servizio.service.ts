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
    {
      id: 1,
      nome:"Alessio",
      cognome:"Andrighi",
      nascita:"02/10/2005",
      voti:[]
    },
    {
      id: 2,
      nome:"Andrea",
      cognome:"Bianchi",
      nascita:"30/07/2005",
      voti:[]
    },
    {
      id: 3,
      nome:"Gabriel",
      cognome:"Bertini",
      nascita:"05/11/2005",
      voti:[]
    },
    {
      id: 4,
      nome:"Matteo",
      cognome:"Bertotti",
      nascita:"23/02/2004",
      voti:[]
    },
    {
      id: 5,
      nome:"Andrea",
      cognome:"Campostrini",
      nascita:"14/05/2020",
      voti:[]
    },
    {
      id: 6,
      nome:"David",
      cognome:"Casciato",
      nascita:"16/11/2005",
      voti:[]
    },
    {
      id: 7,
      nome:"Tommaso",
      cognome:"Civettini",
      nascita:"29/11/2005",
      voti:[]
    },
    {
      id: 8,
      nome:"Jacopo",
      cognome:"Comper",
      nascita:"16/07/2005",
      voti:[]
    },
    {
      id: 9,
      nome:"Nicolas",
      cognome:"Di Filippo",
      nascita:"03/05/2005",
      voti:[]
    },
    {
      id: 10,
      nome:"Dennis",
      cognome:"Ferretti",
      nascita:"28/06/2005",
      voti:[]
    },
    {
      id: 11,
      nome:"Lucrezia",
      cognome:"kirckanski",
      nascita:"09/09/2005",
      voti:[]
    },
    {
      id: 12,
      nome:"Carlo",
      cognome:"Rizzone",
      nascita:"30/11/2005",
      voti:[]
    },
    {
      id: 13,
      nome:"Nicholas",
      cognome:"Sapiga",
      nascita:"18/05/2005",
      voti:[]
    },
    {
      id: 14,
      nome:"Matteo",
      cognome:"Simonetti",
      nascita:"31/01/2005",
      voti:[]
    },
    {
      id: 15,
      nome:"Giulia",
      cognome:"Tiecker",
      nascita:"08/09/2005",
      voti:[]
    },
    {
      id: 16,
      nome:"Lorenzo",
      cognome:"Tomazzoni",
      nascita:"26/10/2005",
      voti:[]
    },
    {
      id: 17,
      nome:"Mustafa",
      cognome:"Vugdalic",
      nascita:"29/12/2003",
      voti:[]
    },
    {
      id: 18,
      nome:"Viktor",
      cognome:"Zamboni",
      nascita:"17/10/2004",
      voti:[]
    }
  ]
  constructor() {
    this.idStudente = 0;
    this.autorizzato=false;
  }


  setAbilita(stato: boolean)
  {
    this.autorizzato = stato;
  }


  getAbilita(): boolean
  {
      return this.autorizzato;
  }

  setStudente(selezione: number)
  {
    this.idStudente = selezione;
  }


  getStudente():studente {
    return this.elencoStudenti[this.idStudente];
  }
}