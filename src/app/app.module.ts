import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-app/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BodypartComponent } from './pages/bodypart/bodypart.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { ExercisesListComponent } from './cmps/exercises-list/exercises-list.component';
import { ExercisesPreviewComponent } from './cmps/exercises-preview/exercises-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    WorkoutComponent,
    LoginComponent,
    SignupComponent,
    BodypartComponent,
    LoaderComponent,
    ExercisesListComponent,
    ExercisesPreviewComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
