import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService{

  allMovie="https://api.themoviedb.org/3/trending/movie/day?api_key=17031c1a6135146fa1083d1385d453c0"

  constructor(private client :HttpClient) { }


  // loadMovies():Observable<any>{
  //    return this.client.get<any>(`${this.allMovie}`);
  // }
  getAllCourses():Observable<any>{
    
    return this.client.get<any>( `https://api.themoviedb.org/3/trending/movie/day?api_key=17031c1a6135146fa1083d1385d453c0`)
   }

   getByName(title:any):Observable<any>{
    return this.client.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=17031c1a6135146fa1083d1385d453c0&query=${title}`)
   }
}
