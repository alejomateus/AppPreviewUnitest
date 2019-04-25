import { Component } from '@angular/core';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVar:string = "Hello World";
  gretting:string ="Good Afternoon Alejo";
  
  pair(number:number){
    return number %2==0 ? true : false;
  }
}
