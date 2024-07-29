import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-plates-card',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatButtonModule],
  templateUrl: './plates-card.component.html',
  styleUrl: './plates-card.component.scss',
})
export class PlatesCardComponent {}
