import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "../../main-page/main-page.component";
@Component({
  selector: 'app-loyout',
  imports: [HeaderComponent, RouterOutlet, ],
  templateUrl: './loyout.component.html',
  styleUrl: './loyout.component.scss',
})
export class LoyoutComponent {}
