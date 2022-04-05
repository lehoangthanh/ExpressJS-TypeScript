export interface CreateUserDto {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  avatar?: string;
  gender?: string;
  age?: number;
}