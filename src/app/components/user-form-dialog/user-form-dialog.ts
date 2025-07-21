import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserCreateDto, UserReadDto, UserUpdateDto } from '../../models/user.model';
import { RoleTypeReadDto } from '../../models/role-type.model';
import { StatusReadDto } from '../../models/status.model';
import { input, output } from '@angular/core';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.html',
  styleUrl: './user-form-dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule]
})
export class UserFormDialogComponent {
  private fb = inject(FormBuilder);

  user = input<UserReadDto | null>(null);
  roles = input<RoleTypeReadDto[]>([]);
  statuses = input<StatusReadDto[]>([]);

  save = output<UserCreateDto | UserUpdateDto>();
  cancel = output<void>();

  userForm = this.fb.nonNullable.group({
    userId: [0],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required], // Password is required for add, optional for edit
    dateOfBirth: ['', Validators.required],
    roleTypeId: [0, Validators.required],
    statusId: [0, Validators.required],
  });

  ngOnInit(): void {
    if (this.user()) {
      this.userForm.patchValue(this.user() as UserReadDto);
      this.userForm.get('password')?.clearValidators(); // Password is optional in edit mode
      this.userForm.get('password')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formValue = this.userForm.getRawValue();
      if (this.user()) {
        // Edit mode
        const userUpdate: UserUpdateDto = {
          userId: formValue.userId,
          firstName: formValue.firstName,
          lastName: formValue.lastName,
          email: formValue.email,
          dateOfBirth: formValue.dateOfBirth,
          roleTypeId: formValue.roleTypeId,
          statusId: formValue.statusId,
        };
        if (formValue.password) {
          userUpdate.password = formValue.password;
        }
        this.save.emit(userUpdate);
      } else {
        // Add mode
        const userCreate: UserCreateDto = {
          firstName: formValue.firstName,
          lastName: formValue.lastName,
          email: formValue.email,
          password: formValue.password,
          dateOfBirth: formValue.dateOfBirth,
          roleTypeId: formValue.roleTypeId,
          statusId: formValue.statusId,
        };
        this.save.emit(userCreate);
      }
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
