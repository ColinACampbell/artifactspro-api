/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('work_spaces', {
    work_space_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    work_space_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    work_space_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_created: {
      type: DataTypes.STRING,
      allowNull: false
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'organizations',
        },
        key: 'org_id',
      },
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE'
    }
  }, {
    sequelize,
    tableName: 'work_spaces',
    schema: 'public'
  });
};
