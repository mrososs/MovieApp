import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesShareService {
  private apiUrlTrendMovies =
    'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTg1OWYxMmNiODYwMzljOGNkZDhhZjA4OGU0MzljNSIsIm5iZiI6MTcyMTgwODc3Ny45MjEwMSwic3ViIjoiNjZhMGI2YTUzZWFhZTRhMWUzYmY2MzRhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.SBnNUOjUwg8jX4kpyQf8ejTbrR-Ghj6XFFsYwOXpVmE',
    }),
  };
  constructor(private http: HttpClient) {}
  getMovieTrend(): Observable<any> {
    return this.http.get<any>(this.apiUrlTrendMovies, this.httpOptions);
  }
}
