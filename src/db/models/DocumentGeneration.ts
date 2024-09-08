import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Document } from './Document';
import { DocumentFormat } from './DocumentFormat';

export class DocumentGeneration extends Model {}

DocumentGeneration.init({
  generation_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  document_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  format_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  generated_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  generated_content: {
    type: DataTypes.BLOB,
    allowNull: false
  },
  generated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  tableName: 'DocumentGenerations',
  timestamps: false
});

// Associations
DocumentGeneration.belongsTo(Document, { foreignKey: 'document_id' });
DocumentGeneration.belongsTo(DocumentFormat, { foreignKey: 'format_id' });
