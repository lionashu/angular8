import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public albumData: object;

  constructor(
    private http: HttpService,
  ) { }

  ngOnInit() {
    this.http.apiData().subscribe(data => {
      this.albumData = data;
      console.log(this.albumData);
    });
  }

}
