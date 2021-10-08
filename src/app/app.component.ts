import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Manuel'

  constructor()
  {
    setInterval( () => this.nome = 'Alejandro', 3000);    
  }

  getSomma(numero1: number , numero2: number)
  {
      return numero1 + numero2   
  }
}
