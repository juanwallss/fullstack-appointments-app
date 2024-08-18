import { DataTypes } from 'sequelize'
import sequelize from '@/config/sequelize'
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    required: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    required: true,
    unique: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    required: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    required: true
  },
  role: {
    type: DataTypes.STRING(255),
    allowNull: false,
    required: true,
    defaultValue: 'user'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
})
export default User
