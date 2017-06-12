import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Story } from '../story.model';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent {

  @Output() newStorySender = new EventEmitter();
   formDisplay = false;

   submitForm(
     title: string,
     url: string,
     username: string,
     category: string,
     id: number
     ) {
     const newStoryToAdd: Story = new Story(title, url, username, category, id);
     this.newStorySender.emit(newStoryToAdd);
   }

   toggleEditForm() {
     if (this.formDisplay === true) {
       this.formDisplay = false;
     } else {
       this.formDisplay = true;
     }
   }

}
