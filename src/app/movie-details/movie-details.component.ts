import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../servcies/movie-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

   data!:any;
   user:string="Leave the World Behind"
   selectedMovie:any;

  constructor(private movieService:MovieServiceService, private activateRoute:ActivatedRoute){}
  ngOnInit(): void {

    this.movieService.getSelectedMovie().subscribe((movie) => {
      this.selectedMovie = movie.title;
    });

    this.movieService.getByName(this.selectedMovie).subscribe(a => this.data =a.results);
  //  const name= this.activateRoute.snapshot.paramMap.get('query');
  //  console.log(name);
  }


  
}
