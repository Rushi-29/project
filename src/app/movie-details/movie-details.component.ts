import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../servcies/movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  data: any;
  // user: string = 'Leave the World Behind';
  credit: any;
  reviews: any;

  constructor(
    private movieService: MovieServiceService,
    public dialog: MatDialog,
    private router:Router
  ) {}
  get credits() {
    return this.credit.slice(0, 5);
  }
  ngOnInit(): void {
    this.movieService.movie$.subscribe((a) => {
      (this.movie = a),
        setTimeout(() => {
          this.movieService
            .getByName(this.movie.original_title)
            .subscribe((a) => {
              (this.data = a.results), console.log(this.data);
            });
          this.movieService.getByMovieId(this.movie.id).subscribe((a) => {
            (this.credit = a.cast), console.log(a.cast);
          }),
            this.movieService.getReviewById(this.movie.id).subscribe((a) => {
              (this.reviews = a.results), console.log(a.results);
            });
        }, 100);
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(ReviewComponent,{
      width: '1000px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onBack() {
    this.router.navigate(['./']);
    
  }
}
