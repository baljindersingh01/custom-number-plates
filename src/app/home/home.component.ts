import { Component,OnInit } from '@angular/core';
import { TodayApiService } from '../services/today-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  quotes: any[] = [];

  constructor(private todayApiService: TodayApiService) { }

  ngOnInit(): void {
    this.todayApiService.getQuotes().subscribe((data) => {
      this.quotes = data;
      console.log(this.quotes);
    });
  }
}
