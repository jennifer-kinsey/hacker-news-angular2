import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Story } from '../story.model';
import { Router } from '@angular/router';
import { StoryService } from '../story.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    providers: [StoryService]
})

export class HomeComponent implements OnInit {
  @Input() newStorySender: Story[];

  stories: Story[];

  constructor(private router: Router, private storyService: StoryService) {}

  ngOnInit() {
    this.stories = this.storyService.getStories();
  }

  addStory(newStoryFromChild: Story) {
    this.stories.push(newStoryFromChild);
  }
}
