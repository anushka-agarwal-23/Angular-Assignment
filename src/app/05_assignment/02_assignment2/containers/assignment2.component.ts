import { Component,Input } from '@angular/core';
import { Todo } from 'src/app/05_assignment/assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  @Input()
  todoItems: Todo[];
 
  @Input()
  selectedItem: Todo;
 
  onClick(todo) {
    this.selectedItem = todo;  
  }
}
