import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seat-grid',
  standalone: true,
  imports: [CommonModule], // Required for *ngFor and dynamic classes to work
  templateUrl: './seat-grid.html', // Change to './seat-grid.component.html' if your file uses that name
  styleUrls: ['./seat-grid.css']   // Change to './seat-grid.component.css' if your file uses that name
})
export class SeatGridComponent implements OnInit {
  
  // The array tracking your seats. Flipped seat 5 to 'reserved' (initial grey)
  seats = [
    { number: 1, status: 'available' },
    { number: 2, status: 'available' },
    { number: 3, status: 'available' },
    { number: 4, status: 'available' },
    { number: 5, status: 'reserved' } 
  ];

  constructor() { }

  ngOnInit(): void { }

  // The function that executes when ANY seat button is clicked
  toggleSeatSelection(seat: any): void {
    // If it's already grey/reserved or selected, don't let them click it again
    if (seat.status === 'reserved' || seat.status === 'selected') {
      alert('This seat is already sold!');
      return;
    }

    // 1. Show the native browser confirmation box
    alert('Booked successfully');

    // 2. The code execution pauses until you click "OK" on the alert box.
    // Once clicked, we update the status to 'selected' which turns it grey via CSS!
    seat.status = 'selected';
  }
}