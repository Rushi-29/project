import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../servcies/movie-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  data!: any[];
  selectedType = 'ALL';
  // filteredData: any;

  is18PlusFilter: any = false;
  dataSource = new MatTableDataSource(this.data);
  visibleMovies:boolean = false;

  constructor(
    private router: Router,
    private movieServcice: MovieServiceService
  ) {}

  getVisibleMovies() {
    if(!this.visibleMovies)
    return this.dataSource.filteredData.slice(0, 6);
  else{
    return this.dataSource.filteredData;
  }
  }
  
  onClick(movie: any) {
    this.movieServcice.setMovies(movie);
    this.router.navigate(['/details', movie.id]);
  }
  ngOnInit(): void {
    this.movieServcice.loadMovies().subscribe((a) =>
      setTimeout(() => {
        this.data = a.results;
        this.dataSource.data = this.data;
      }, 100)
    );
  }
  toggle18PlusFilter() {
    this.is18PlusFilter = !this.is18PlusFilter;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  showMore(){
   this.visibleMovies = !this.visibleMovies;
  }

}
