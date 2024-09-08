import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class UniversalConfiguration extends Model {}

UniversalConfiguration.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  value: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'UniversalConfiguration',
  timestamps: false
});
