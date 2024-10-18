import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/itodo';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  todos: iTodo[] = [];

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.todosSvc.addUserToTodo(this.usersSvc.users);

    this.todos = this.todosSvc.todos.filter((todo) => todo.completed);

    console.log(this.todos);
  }
}
