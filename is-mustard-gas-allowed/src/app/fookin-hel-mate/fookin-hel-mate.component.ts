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
  makeCompactPost(): void {
    this.loading = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }
}
