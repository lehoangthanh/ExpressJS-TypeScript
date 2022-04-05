// we import the argon2 library for password hashing
import argon2 from 'argon2';

import UsersDao from '../daos/users.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { CreateUserDto } from '../dto/create.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import userTmp from '../database/userTmp';

class UsersService implements CRUD {
  create(resource: CreateUserDto) {
    return UsersDao.addUser(resource);
  }

  deleteById(id: string) {
    return UsersDao.removeUserById(id);
  }

  list(limit: number, page: number) {
    return UsersDao.getUsers();
  }

  patchById(id: string, resource: PatchUserDto) {
    return UsersDao.patchUserById(id, resource);
  }

  putById(id: string, resource: PutUserDto) {
    return UsersDao.putUserById(id, resource);
  }

  readById(id: string) {
    return UsersDao.getUserById(id);
  }

  async getUserByEmail(email: string) {
    return UsersDao.getUserByEmail(email);
  }

  importUser() {
    userTmp.forEach(async(u) => {
      u.password =  await argon2.hash(u.password);
      this.create(u);
    });
  }
}
export default new UsersService();