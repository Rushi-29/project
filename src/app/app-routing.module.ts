import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WeeklyTrendingComponent } from './weekly-trending/weekly-trending.component';

const routes: Routes = [
  {path:"",component:MoviesComponent},
{path:"daily" , component:MoviesComponent},
{path:"details/:id", component:MovieDetailsComponent},
{path :"weekly", component:WeeklyTrendingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
