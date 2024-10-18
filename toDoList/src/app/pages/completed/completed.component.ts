import { Component, OnInit, SimpleChanges } from '@angular/core';
import { iTodo } from '../../interfaces/itodo';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent implements OnInit {
  todos: iTodo[] = [];
  filteredTodos: iTodo[] = [];
  search: string = '';

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.todosSvc.addUserToTodo(this.usersSvc.users);

    this.todos = this.todosSvc.todos.filter((todo) => todo.completed);

    this.usersSvc.searched$.subscribe((search: string) => {
      this.search = search;
    });
  }

  ngDoCheck() {
    if (this.search) {
      this.filteredTodos = this.todos.filter((todo) =>
        todo.user?.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}
