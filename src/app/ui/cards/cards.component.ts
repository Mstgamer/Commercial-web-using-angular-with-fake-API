import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  constructor(private api:ApiService){}
  
    products:any=[]

    ngOnInit(){
     this.api.getData().subscribe((data:any)=>{this.products=data;})
    }

 

}
