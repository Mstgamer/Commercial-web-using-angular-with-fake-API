import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./ui/cards/cards.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chinjukart';
}
