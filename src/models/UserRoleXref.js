const { DataTypes, Model } = require('sequelize');

/**
 * 
 * @param {Sequelize} sequelize Sequelize connection object
 * @param {DataTypes} DataTypes DataTypes
 */
function UserRoleXrefModel(sequelize, DataTypes) {
    
    class UserRoleXref extends Model {
        static associcate(model) {
        }
    }
    
    UserRoleXref.init({
        enterpriseUserRoleXrefId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        enterpriseUserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        enterpriseRoleId: {
            type: DataTypes.INTEGER,
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
        tableName: 'enterprise_user_role_xref',
        underscored: true,
        timestamps: false,
        paranoid: false,
    });

    return UserRoleXref;
}

module.exports = UserRoleXrefModel;