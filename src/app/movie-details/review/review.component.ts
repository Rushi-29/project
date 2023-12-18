import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/servcies/movie-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  movie: any;
  reviews: any;

  constructor(private movieService: MovieServiceService) {}
  ngOnInit(): void {
    this.movieService.movie$.subscribe((a) => {
      (this.movie = a),
        setTimeout(() => {
          this.movieService.getReviewById(this.movie.id).subscribe((a) => {
            (this.reviews = a.results), console.log(a.results);
          });
        });
    });
  }
}
