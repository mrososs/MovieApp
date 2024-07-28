import { Component, OnInit } from '@angular/core';
import { MoviesShareService } from '../services/movies-share.service';
import { IMovie } from '../interfaces/movie-interface';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carusol-cards',
  standalone: true,
  imports: [HttpClientModule, RouterModule,NgFor],
  providers: [MoviesShareService],
  templateUrl: './carusol-cards.component.html',
  styleUrls: ['./carusol-cards.component.scss'],
})
export class CarusolCardsComponent implements OnInit {
  movies: IMovie[] = [];
  chunkedMovies: IMovie[][] = [];
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
      this.chunkMovies();
    });

    window.addEventListener('resize', this.chunkMovies.bind(this));
  }

  chunkMovies() {
    const itemsPerSlide = window.innerWidth < 576 ? 1 : 4;
    this.chunkedMovies = [];
    for (let i = 0; i < this.movies.length; i += itemsPerSlide) {
      this.chunkedMovies.push(this.movies.slice(i, i + itemsPerSlide));
    }
  }
}
