export interface RoleTypeReadDto {
  roleId: number;
  roleName: string;
  status: number;
  createdAt: string;
  modifiedAt: string;
}

export interface RoleTypeCreateUpdateDto {
  roleName: string;
  status: number;
}
