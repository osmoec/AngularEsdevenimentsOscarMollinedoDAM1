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
      camp.innerText = tecla.key
      // @ts-ignore
      camp.style.fontSize = '70px'
    })
    document.body.addEventListener('keyup',() =>{
      // @ts-ignore
      document.getElementById("teclapresionada").innerText = ""
    })
  }

  protected readonly canvifonsbttn = canvifonsbttn;
  protected readonly canvifonsbttnNofocus = canvifonsbttnNofocus;

}
function canvifonsbttn(){
  document.body.style.backgroundColor = 'blue'
}

function canvifonsbttnNofocus(){
  document.body.style.backgroundColor = 'orange '
}


