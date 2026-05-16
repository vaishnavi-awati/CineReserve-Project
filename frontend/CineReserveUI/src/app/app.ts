import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeatGridComponent } from './seat-grid/seat-grid'; // 1. Add this import line!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SeatGridComponent // 2. Add it to this array!
  ], 
  templateUrl: './app.html',             
  styleUrls: ['./app.css']               
})
export class AppComponent {
  // your logic
}