export interface UserReadDto {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  roleTypeId: number;
  roleName: string;
  statusId: number;
  statusName: string;
  createdAt: string;
  modifiedAt: string;
}

export interface UserCreateDto {
  firstName: string;
  lastName: string;
  email: string;
  password?: string; // Making password optional for updates
  dateOfBirth: string;
  roleTypeId: number;
  statusId: number;
}

export interface UserUpdateDto extends UserCreateDto {
  userId: number;
}

export interface UserLoginDto {
  email: string;
  password: string;
}
