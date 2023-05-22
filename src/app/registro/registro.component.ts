import { Component, EventEmitter, Output } from '@angular/core';
import { ServizioService } from '../servizio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  selezioneCorrente : number; 
  selettore: Array<number>;

    @Output() studenteSelezionato = new EventEmitter<number>();


    constructor(public servizio:ServizioService)
    {
      this.selezioneCorrente = 0;
      this.selettore = Array(this.servizio.elencoStudenti.length);
    }

    addVoto(id: number) {
      this.servizio.elencoStudenti[id].voti.push(this.selettore[id]);
    }
    
    ngOnInit() {}
  

    selezione(numero : number)
    {
      this.selezioneCorrente = numero;
      this.servizio.setStudente(numero);
      this.studenteSelezionato.emit(numero);
    }
}
