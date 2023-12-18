import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService{



  allMovie="https://api.themoviedb.org/3/trending/movie/day?api_key=17031c1a6135146fa1083d1385d453c0"
  byName="https://api.themoviedb.org/3/search/movie?api_key=17031c1a6135146fa1083d1385d453c0&query="
  weekly="https://api.themoviedb.org/3/trending/movie/week?api_key=17031c1a6135146fa1083d1385d453c0"
  private movie = new BehaviorSubject<any>(null);
  movie$=this.movie.asObservable();

  constructor(private client :HttpClient) { }

  setMovies(movies:any):void{
    this.movie.next(movies);
  }

  loadMovies():Observable<any>{
    
    return this.client.get<any>( `${this.allMovie}`)
   }

   getByName(title:any):Observable<any>{
    return this.client.get<any>(`${this.byName}${title}`)
   }

   getByMovieId(movieId:any):Observable<any>{
    return this.client.get<any>(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17031c1a6135146fa1083d1385d453c0`)
   }

   getReviewById(moviesId:any):Observable<any>{
    return this.client.get<any>(`https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=17031c1a6135146fa1083d1385d453c0`)
   }

   weeklytrending() : Observable<any>{
    return this.client.get<any>(`${this.weekly}`)

   }
}
