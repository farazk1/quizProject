import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quiz', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
