/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    doc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
      references: {
        model: {
          tableName: 'users',
        },
        key: 'user_id'
      }
    },
    data: {
      type: 'BYTEA',
      allowNull: false
    },
    date_uploaded: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_modified: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
      references: {
        model: {
          tableName: 'artifacts',
        },
        key: 'art_id'
      }
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'this is the document type to be uploaded, for instance pdf, docx or psd'
    }
  }, {
    sequelize,
    tableName: 'documents',
    schema: 'public'
  });
};
