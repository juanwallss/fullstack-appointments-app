import { DataTypes } from 'sequelize'
import sequelize from '@/config/sequelize'
import User from './userModel'

const Professional = sequelize.define('Professional', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  business_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  updated_at:{
    type: DataTypes.DATE,
    defaultValue: new Date()
  }
})

export default Professional
