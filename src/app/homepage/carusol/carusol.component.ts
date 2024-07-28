import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MoviesShareService } from '../../services/movies-share.service';
import { IMovie } from '../../interfaces/movie-interface';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carusol',
  standalone: true,
  imports: [HttpClientModule, RouterModule,NgFor],
  providers: [MoviesShareService],
  templateUrl: './carusol.component.html',
  styleUrls: ['./carusol.component.scss'],
})
export class CarusolComponent implements OnInit {
  movies: IMovie[] = [];
  baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService: MoviesShareService) {}

  ngOnInit(): void {
    this.movieService.getMovieTrend().subscribe((data) => {
      this.movies = data.results.map((movie: any) => ({
        title: movie.title,
        name: movie.name,
        overview: movie.overview,
        poster_path: movie.poster_path
          ? this.baseImageUrl + movie.poster_path
          : '',
          media_type: movie.media_type,
      }));
      console.log(this.movies);
    });
  }
}
