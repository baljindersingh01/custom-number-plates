import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

}
