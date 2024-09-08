import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class DocumentFormat extends Model {}

DocumentFormat.init({
  format_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  format_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  }
}, {
  sequelize,
  tableName: 'DocumentFormats',
  timestamps: false
});
