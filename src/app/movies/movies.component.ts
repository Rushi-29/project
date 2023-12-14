import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../servcies/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  data!:any[] ;


  constructor(private movieServcice : MovieServiceService) {}
  ngOnInit(): void {

    this.movieServcice.getAllCourses().subscribe(a => setTimeout(()=>{this.data=a.results},1000) )

  }

}
