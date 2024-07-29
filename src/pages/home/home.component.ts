import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { PlatesCardComponent } from '../../component/plates-card/plates-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatGridListModule,
    PlatesCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = 'Welcome to custom plates store.';
  description: string = ' Choose your number within 5 minutes only..';
}
