export interface StatusReadDto {
  statusId: number;
  statusName: string;
  createdAt: string;
  modifiedAt: string;
}

export interface StatusCreateUpdateDto {
  statusName: string;
}
