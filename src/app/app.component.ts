import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Implement} from '@angular/cli/lib/config/workspace-schema';
import {FormsModule} from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import {KnobModule} from 'primeng/knob';
import {MeterGroupModule} from 'primeng/metergroup';
import {PaginatorModule} from 'primeng/paginator';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ToastModule} from 'primeng/toast';
import {Button} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {PasswordModule} from 'primeng/password';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, EditorModule, KnobModule, MeterGroupModule, PaginatorModule, ColorPickerModule, ToastModule, ToggleButtonModule, PasswordModule],
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
  numero1: number = 0
  numero2: number = 0
  resultat: number = 0
  textprova: string = ""
  numeroprova2: number = 0

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
  protected readonly calculadoraSUM = calculadoraSUM;
  protected readonly calculadoraRES = calculadoraRES;
  protected readonly calculadoraMUL = calculadoraMUL;
  protected readonly calculadoraDIV = calculadoraDIV;
  protected readonly canvimouse = canvimouse;
  protected readonly contrasenyaC = contrasenyaC;
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

function calculadoraSUM(this: AppComponent){
  this.resultat = this.numero1 + this.numero2
}

function calculadoraRES(this: AppComponent){
  this.resultat = this.numero1 - this.numero2
}

function calculadoraMUL(this: AppComponent){
  this.resultat = this.numero1 * this.numero2
}

function calculadoraDIV(this: AppComponent){
  this.resultat = this.numero1 / this.numero2
}

function canvimouse(this: AppComponent, event: MouseEvent){
  let mx = event.clientX;

  this.numeroprova2 = mx
}

function contrasenyaC(this: AppComponent){
  console.log("han enganxat algo al camp contrasenya")
}

function rotarImgDivPrin(){

}
