import { Component, OnInit } from '@angular/core';
import { MoviesShareService } from '../services/movies-share.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthServicesService } from '../services/auth-services.service';
import { IMovie } from '../interfaces/movie-interface';
import { NgFor } from '@angular/common';
import { CarusolComponent } from './carusol/carusol.component';
import { RouterModule } from '@angular/router';
import { CarusolCardsComponent } from '../carusol-cards/carusol-cards.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HttpClientModule,
    NgFor,
    CarusolComponent,
    RouterModule,
    CarusolCardsComponent,
  ],
  providers: [MoviesShareService, AuthServicesService],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'], // Correct to styleUrls
})
export class HomepageComponent implements OnInit {
  movies!: IMovie[];
  moviesName: any[] = [];

  constructor(private movieService: MoviesShareService) {}

  ngOnInit(): void {}
}
