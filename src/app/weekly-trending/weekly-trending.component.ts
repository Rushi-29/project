import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../servcies/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-trending',
  templateUrl: './weekly-trending.component.html',
  styleUrls: ['./weekly-trending.component.css']
})
export class WeeklyTrendingComponent implements OnInit{


  data:any;
  is18PlusFilter = false;

  constructor(private movieService:MovieServiceService, private router:Router){}
  ngOnInit(): void {
    this.movieService.weeklytrending().subscribe(a => this.data = a.results);

  }
  onClick(movie:any) {
    this.movieService.setMovies(movie);
    this.router.navigate(['/details',movie.id])
  }

}
