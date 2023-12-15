import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../servcies/movie-service.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  data!:any[] ;
  selectedType = "ALL";
  filteredData:any;
is18PlusFilter: any= false;
dataSource :any;



  constructor(private router:Router, private movieServcice : MovieServiceService) {}
  
  
  onClick(movie:any) {
  this.movieServcice.setMovies(movie);
  this.router.navigate(['/details',movie.id])

  }
  ngOnInit(): void {

    this.movieServcice.loadMovies().subscribe(a => setTimeout(()=>{this.data=a.results},1000) )

  }
  applyFilter(filterValue:any) {
    // this.data.filter.includes((filterValue.target as HTMLTextAreaElement).value.toLowerCase());
  }

}
