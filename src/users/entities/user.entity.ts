import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    allowNull: false,
  })
  username: string;

  @Column({
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @Column({
    allowNull: false,
    validate: {
      is: /^\+?\d{10,15}$/,
    },
  })
  phone: string;
}
