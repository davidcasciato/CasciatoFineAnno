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
  votii: number[] = [];

    @Output() studenteSelezionato = new EventEmitter<number>();


    constructor(public servizio:ServizioService)
    {
      this.selezioneCorrente = 0;
      this.selettore = Array(this.servizio.elencoStudenti.length);
      for (let i = 3; i<=10; i += 0.25){
        this.votii.push(i);
      }
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
