import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Story } from '../story.model';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {

  @Output() newStorySender = new EventEmitter();
   formDisplay: boolean = false;

   submitForm(
     title: string,
     url: string,
     username: string,
     category: string,
     id: number
     ) {
     var newStoryToAdd: Story = new Story(title, url, username, category, id);
     this.newStorySender.emit(newStoryToAdd);
   }

   toggleEditForm() {
     if(this.formDisplay === true) {
       this.formDisplay = false;
     } else {
       this.formDisplay = true;
     }
   }

}
