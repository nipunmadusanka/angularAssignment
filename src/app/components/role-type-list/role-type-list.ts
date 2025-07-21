import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RoleTypeService } from '../../services/role-type';
import { RoleTypeReadDto } from '../../models/role-type.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-type-list',
  templateUrl: './role-type-list.html',
  styleUrl: './role-type-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class RoleTypeListComponent implements OnInit {
  private roleTypeService = inject(RoleTypeService);

  roles = signal<RoleTypeReadDto[]>([]);

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleTypeService.getAllRoles().subscribe({
      next: (roles) => {
        this.roles.set(roles);
      },
      error: (err) => {
        console.error('Error loading roles:', err);
        // TODO: Display error message to user
      }
    });
  }

  // TODO: Implement methods for opening Add/Edit/Delete dialogs
}
