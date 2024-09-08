import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { DocumentGeneration } from './DocumentGeneration';

export class GenerationHistory extends Model {}

GenerationHistory.init({
  history_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  generation_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'In Progress'
  },
  error_message: {
    type: DataTypes.TEXT,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  tableName: 'GenerationHistory',
  timestamps: false
});

// Association
GenerationHistory.belongsTo(DocumentGeneration, { foreignKey: 'generation_id' });
