import { Pipe, PipeTransform } from '@angular/core';
import { Story } from './story.model';

@Pipe({
  name: 'job',
  pure: false
})

export class JobPipe implements PipeTransform {

  transform(input: Story[]){
    var output: Story[] = [];
    for(var i = 0; i < input.length; i++){
      if(input[i].category === "jobs"){
        output.push(input[i]);
      }
    }
    return output;
  }
}
