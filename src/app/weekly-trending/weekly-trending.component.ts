import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../servcies/movie-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-weekly-trending',
  templateUrl: './weekly-trending.component.html',
  styleUrls: ['./weekly-trending.component.css']
})
export class WeeklyTrendingComponent implements OnInit{


  data!:any[];
  is18PlusFilter = false;
  dataSource = new MatTableDataSource(this.data);
  visibleMovies : boolean = false;

  constructor(private movieService:MovieServiceService, private router:Router){}
  ngOnInit(): void {
    this.movieService.weeklytrending().subscribe((a) =>
      setTimeout(() => {
        this.data = a.results;
        this.dataSource.data = this.data;
      }, 100)
    );

  }
  getVisibleMovies() {
    if(!this.visibleMovies)
    return this.dataSource.filteredData.slice(0, 6);
  else{
    return this.dataSource.filteredData;
  }
  }
  onClick(movie:any) {
    this.movieService.setMovies(movie);
    this.router.navigate(['/details',movie.id])
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
