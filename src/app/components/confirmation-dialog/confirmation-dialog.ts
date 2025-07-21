import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class ConfirmationDialogComponent {
  message = input<string>('Are you sure?');

  confirm = output<boolean>();

  onYes(): void {
    this.confirm.emit(true);
  }

  onNo(): void {
    this.confirm.emit(false);
  }
}
