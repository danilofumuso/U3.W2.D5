import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../interfaces/itodo';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';
import { iUser } from '../../interfaces/iuser';
import { find } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  todos: iTodo[] = [];

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.todosSvc.addUserToTodo(this.usersSvc.users);
    this.usersSvc.searched$.subscribe();

    this.todos = this.todosSvc.todos;
  }
}
