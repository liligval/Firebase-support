import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private jsonFile: string = 'http://localhost:4200/assets/data.json';
  data: any = {};

  constructor(private http:Http) {
    console.log('Testing...');
    this.getData();
    this.callJsonFile();
  }

  callJsonFile() {
    return this.http.get(this.jsonFile).map((res: any) => res.json());
  }

  getData() {
    this.callJsonFile().subscribe(data => {
      console.log('data', data);
      this.data = data
    })
  }
}
