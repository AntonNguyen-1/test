import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(userData: {
    username: string;
    email: string;
    phone: string;
  }): Promise<User> {
    try {
      const user = await this.userModel.create(userData);
      console.log(user);
      return user;
    } catch (error) {
      console.error('createUser error:', error);
      throw error;
    }
  }

  async getUserById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
