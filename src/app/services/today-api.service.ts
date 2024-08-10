import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodayApiService {
  private apiUrl = 'https://today.zenquotes.io/api/today'; // Adjust the endpoint if needed

  constructor(private http: HttpClient) { }

  // Method to fetch quotes from the API
  getQuote(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response), // Modify this if the structure of the response is different
      catchError(this.handleError)
    );
}

// Error handling method
private handleError(error: any) {
  console.error('An error occurred:', error);
  return "Server Error";
}
}