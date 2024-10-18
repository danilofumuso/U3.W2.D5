import { Component, Input } from '@angular/core';
import { iUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: iUser;
}
