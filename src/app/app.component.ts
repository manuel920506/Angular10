import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Manuel'
  testoPlaceHolder = "Scriva sotto"
  desabilitato = true;
  imgSrc = "data:image/png;base64,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"
  testo = 'Questo è un video su l\'event binding'
  text = ''
  listStudenti: any[] = 
  [
    {nome: "Manuel Rodriguez", stato: "Promosso"},
    {nome: "Mario Rossi", stato: "Regolare"},
    {nome: "Giulia Pavarotti", stato: "Promosso"}
  ]
  mostrare = true;

  constructor()
  {
    setInterval( () => this.desabilitato = false, 3000);    
  }

  getSomma(numero1: number , numero2: number)
  {
      return numero1 + numero2   
  }

  cambiaTesto(): void
  {
    this.testo = "Nel prossimo video vedremo Two way data-binding"
  }
  toglee(): void
  {
      this.mostrare = !this.mostrare;
  }
}
