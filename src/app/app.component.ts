import { Component } from '@angular/core';
import { Story } from './story.model';
import { HomeComponent } from './home/home.component';
import { NewStoryComponent } from './new-story/new-story.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  title = 'HackerNews';


}
