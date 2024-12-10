import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Implement} from '@angular/cli/lib/config/workspace-schema';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularEsdevenimentsOscarMollinedoDAM1';

  sumastring: string = ""
  contadorB: number = 0
  nom: string = ""
  cognom: string = ""

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
      if (this.sumastring === "qwerty"){
        let video = document.getElementById('videosecret')
        // @ts-ignore
        video.removeAttribute('hidden')
      }
      else {
        // @ts-ignore
        document.getElementById('videosecret').setAttribute('hidden')
      }
    })
    console.log(this.nom+" "+this.cognom)
  }

  protected readonly canvifonsbttn = canvifonsbttn;
  protected readonly canvifonsbttnNofocus = canvifonsbttnNofocus;

  protected readonly botoclicat = botoclicat;
  protected readonly botoreinicia = botoreinicia;
  protected readonly concatena = concatena;
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

function concatena(this: AppComponent){
  console.log(this.nom+" "+this.cognom)
}
