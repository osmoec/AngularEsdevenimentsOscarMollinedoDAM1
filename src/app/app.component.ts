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


  canvifonsbttn(){
    document.body.style.backgroundColor = 'blue'
  }

  canvifonsbttnNofocus(){
    document.body.style.backgroundColor = 'orange '
  }

  botoclicat(){
    this.contadorB += 1
  }

  botoreinicia(){
    this.contadorB = 0
  }

  concatena(){
    console.log(this.nom+" "+this.cognom)
  }

  calculadoraSUM(){
    this.resultat = this.numero1 + this.numero2
  }

  calculadoraRES(){
    this.resultat = this.numero1 - this.numero2
  }

  calculadoraMUL(){
    this.resultat = this.numero1 * this.numero2
  }

  calculadoraDIV(){
    this.resultat = this.numero1 / this.numero2
  }

  canvimouse(event: MouseEvent){
    let mx = event.clientX;

    this.numeroprova2 = mx
  }

  contrasenyaC(){
    console.log("han enganxat algo al camp contrasenya")
  }

  rotarImgDivPrin(){
    let imatge = document.getElementById('imatgeDivPrin')
    // @ts-ignore
    imatge.setAttribute("class", "rotar");
    setTimeout(()=>{// @ts-ignore
      imatge.setAttribute("class", "rotarimg")}, 1000)
  }

}
