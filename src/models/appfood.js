import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class appfood extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    appfood_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    appfood_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appfood',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "appfood_id" },
        ]
      },
    ]
  });
  }
}
