import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services/user';
import { UserReadDto } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule]
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService);

  users = signal<UserReadDto[]>([]);
  filteredUsers = signal<UserReadDto[]>([]);
  searchTerm = signal<string>('');

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.applyFilter();
      },
      error: (err) => {
        console.error('Error loading users:', err);
        // TODO: Display error message to user
      }
    });
  }

  applyFilter(): void {
    const term = this.searchTerm().toLowerCase();
    this.filteredUsers.set(this.users().filter(user =>
      user.firstName.toLowerCase().includes(term) || user.lastName.toLowerCase().includes(term)
    ));
  }

  // TODO: Implement methods for opening Add/Edit/Delete dialogs
}
