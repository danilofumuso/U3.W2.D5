import { Component, OnInit } from '@angular/core';
import { iUser } from '../../interfaces/iuser';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: iUser[] = [];
  filteredUsers: iUser[] = [];
  search: string = '';

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.usersSvc.addTodosToUser(this.todosSvc.todos);
    this.users = this.usersSvc.users;

    this.usersSvc.searched$.subscribe((search: string) => {
      this.search = search;
    });
  }

  ngDoCheck() {
    if (this.search) {
      this.filteredUsers = this.users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
          user.lastName.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}
