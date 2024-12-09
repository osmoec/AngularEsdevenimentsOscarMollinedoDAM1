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

  ngOnInit(): void {
  }

  protected readonly canvifonsbttn = canvifonsbttn;
  protected readonly canvifonsbttnNofocus = canvifonsbttnNofocus;
}

function canvifonsbttn(){
  document.body.style.backgroundColor = 'blue'
}

function canvifonsbttnNofocus(){
  document.body.style.backgroundColor = 'orange'
}
