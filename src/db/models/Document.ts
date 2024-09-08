import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { User } from './User';

export class Document extends Model {}

Document.init({
  document_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  original_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file_size: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.BLOB,
    allowNull: false
  },
  uploaded_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  tableName: 'Documents',
  timestamps: false
});

// Association
Document.belongsTo(User, { foreignKey: 'user_id' });
