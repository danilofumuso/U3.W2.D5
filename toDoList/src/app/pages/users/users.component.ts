import { Component } from '@angular/core';
import { iUser } from '../../interfaces/iuser';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: iUser[] = [];

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.usersSvc.addTodosToUser(this.todosSvc.todos);

    this.users = this.usersSvc.users;
  }
}
