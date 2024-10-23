import { Component } from '@angular/core';
import { CarouselComponent } from "../../ui/carousel/carousel.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
