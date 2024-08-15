import { Component, OnInit } from '@angular/core';
import { TodayApiService } from '../services/today-api.service';
import { HttpClientModule } from '@angular/common/http';
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
  quotes: any[] = [];

  constructor(
    private todayApiService: TodayApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.todayApiService.getQuotes().subscribe((data) => {
      this.quotes = data;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
