import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  // Ensure this port matches your Visual Studio Project
  private apiUrl = 'http://localhost:5038/api/Booking';

  constructor(private http: HttpClient) { }

  getSeats(showId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/seats/${showId}`);
  }

  bookSeat(ticket: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/book`, ticket);
  }
}