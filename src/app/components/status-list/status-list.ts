import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { StatusService } from '../../services/status';
import { StatusReadDto } from '../../models/status.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.html',
  styleUrl: './status-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class StatusListComponent implements OnInit {
  private statusService = inject(StatusService);

  statuses = signal<StatusReadDto[]>([]);

  ngOnInit(): void {
    this.loadStatuses();
  }

  loadStatuses(): void {
    this.statusService.getAllStatuses().subscribe({
      next: (statuses) => {
        this.statuses.set(statuses);
      },
      error: (err) => {
        console.error('Error loading statuses:', err);
        // TODO: Display error message to user
      }
    });
  }

  // TODO: Implement methods for opening Add/Edit/Delete dialogs
}
