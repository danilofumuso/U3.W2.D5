import { Component } from '@angular/core';
import { iUser } from '../../interfaces/iuser';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  users: iUser[] = [];
  userSearched: string = '';

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.usersSvc.addTodosToUser(this.todosSvc.todos);

    this.users = this.usersSvc.users;
  }

  onSearchChange() {
    this.usersSvc.searchedUser(this.userSearched);
  }
}
