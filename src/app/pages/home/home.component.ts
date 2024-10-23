import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
