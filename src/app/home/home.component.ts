import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../common/modal/modal.component';

@Component({  
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  jsonData: any[] = [];
  constructor(private http: HttpClient,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('assets/data.json')
      .subscribe(data => {
        this.jsonData = data;
      });
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '442px',
    });
  }

  deleteData(el:any):void{
    const childElement = el;
    const parentElement = childElement.parentElement;
    el.jsonData[0].de();
  }
}
