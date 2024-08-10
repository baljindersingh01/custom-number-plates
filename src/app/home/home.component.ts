import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { TodayApiService } from '../services/today-api.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { 
  todayQuote: string | undefined;

  constructor(private todayApiService: TodayApiService) { }
  ngOnInit(): void {
    this.getQuote();
  }
// Method to get a quote from the service
getQuote(): void {
  this.todayApiService.getQuote().subscribe(
    data => {
      // Assuming the API returns an array of quotes, adjust this according to the actual response structure
      this.todayQuote = data[0].q; // Modify as per the actual response
    },
    error => {
      console.error('Error fetching quote:', error);
    }
  );
}
}
