import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../servcies/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  data!:any[] ;


  constructor(private  router: Router ,private movieServcice : MovieServiceService) {}
  ngOnInit(): void {

    this.movieServcice.loadMovies().subscribe(a => setTimeout(()=>{this.data=a.results},1000) )

  }
  OnClick(movie:any){
    this.movieServcice.setSelectedMovie(movie);
    this.router.navigate(["/details"])
  }

}
