import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fookin-hel-mate',
  templateUrl: './fookin-hel-mate.component.html',
  styleUrls: ['./fookin-hel-mate.component.css']
})
  export class FookinHelMateComponent {
  data: Object = new Object();
  loading: boolean = false;
  o: Observable<Object> = new Observable<Object>();

  constructor(public http: HttpClient) {}
  makeRequest(): void {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(d => {
      this.data = new Object(d);
      this.loading = false;
    });
  }
  //Nota bene, questo è un metodo alternativo e compatto per fare la stessa cosa di 
  //makeRequest senza dichiarare la variabile Observable e creando l’arrow function   
  //direttamente dentro il metodo subscribe
  /*
  makeCompactRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(newData => {
      this.data = newData;
      this.loading = false;
      });
     }*/
}
