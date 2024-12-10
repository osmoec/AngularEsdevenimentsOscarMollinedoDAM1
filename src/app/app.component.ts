import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Implement} from '@angular/cli/lib/config/workspace-schema';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularEsdevenimentsOscarMollinedoDAM1';

  sumastring: string = ""
  contadorB: number = 0

  constructor() {}

  ngOnInit(): void {
    document.body.addEventListener('keydown',(tecla: KeyboardEvent) =>{
      let camp = document.getElementById("teclapresionada")
      // @ts-ignore
      this.sumastring += tecla.key
      // @ts-ignore
      camp.innerText = this.sumastring;
      // @ts-ignore
      camp.style.fontSize = '70px'
    })
  }

  protected readonly canvifonsbttn = canvifonsbttn;
  protected readonly canvifonsbttnNofocus = canvifonsbttnNofocus;

  protected readonly botoclicat = botoclicat;
  protected readonly botoreinicia = botoreinicia;
}
function canvifonsbttn(){
  document.body.style.backgroundColor = 'blue'
}

function canvifonsbttnNofocus(){
  document.body.style.backgroundColor = 'orange '
}

function botoclicat(this: AppComponent){
  this.contadorB += 1
}

function botoreinicia(this: AppComponent){
  this.contadorB = 0
}


