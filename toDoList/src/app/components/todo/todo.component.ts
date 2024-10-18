import { Component, Input } from '@angular/core';
import { iTodo } from '../../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo!: iTodo;
}
