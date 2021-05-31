const { DataTypes, Model } = require('sequelize');

/**
 * 
 * @param {Sequelize} sequelize Sequelize connection object
 * @param {DataTypes} DataTypes DataTypes
 */
function RoleModel(sequelize, DataTypes) {
    
    class Role extends Model {
        static associcate(model) {
            this.belongsToMany(model.User, { through: model.UserRoleXref, otherKey: 'enterprise_role_id' });
        }
    }
    
    Role.init({
        enterpriseRoleId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        roleName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        roleType: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(1),
            defaultValue: 'A'
        },
        created_on_timestamp: {
            type: DataTypes.DATE,
        },
        created_by_user: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'USER'
        },
        updated_on_timestamp: {
            type: DataTypes.DATE
        },
        updated_by_user: {
            type: DataTypes.STRING
        },
        deleted_on_timestamp: {
            type: DataTypes.DATE
        },
    }, {
        sequelize,
        freezeTableName: true,
        tableName: 'enterprise_roles',
        underscored: true,
        timestamps: false,
        paranoid: false,
    });

    return Role;
}

module.exports = RoleModel;