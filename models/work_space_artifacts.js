/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('work_space_artifacts', {
    work_space_artifacts_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    work_space_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //defaultValue: nextvalworkspace_artifacts_work_space_id_seq::regclass,
      references: {
        model: {
          tableName: 'work_spaces',
        },
        key: 'work_space_id'
      }
    },
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //defaultValue: nextvalworkspace_artifacts_art_id_seq::regclass,
      references: {
        model: {
          tableName: 'artifacts',
        },
        key: 'art_id'
      }
    },
    is_secured : {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    password : {
      type : DataTypes.TEXT,
      allowNull : true,
    }
  }, {
    sequelize,
    tableName: 'work_space_artifacts',
    schema: 'public'
  });
};
