import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../interfaces/itodo';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  todos: iTodo[] = [];
  filteredTodos: iTodo[] = [];
  search: string = '';

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.todosSvc.addUserToTodo(this.usersSvc.users);
    this.todos = this.todosSvc.todos;

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
