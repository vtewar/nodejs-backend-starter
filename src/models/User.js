const { DataTypes, Model } = require('sequelize');

/**
 * 
 * @param {Sequelize} sequelize Sequelize connection object
 * @param {DataTypes} DataTypes DataTypes
 */
function UserModel(sequelize, DataTypes) {
    
    class User extends Model {
        static associcate(model) {
            this.belongsToMany(model.Role, { through: model.UserRoleXref, otherKey: 'enterprise_user_id' });
        }
    }
    
    User.init({
        enterpriseUserId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        last_login_timestamp: {
            type: DataTypes.DATE,
        },
        failed_login_attempts: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        last_failed_login_attempt: {
            type: DataTypes.DATE,
        },
        password_reset_token: {
            type: DataTypes.STRING
        },
        password_reset_token_timestamp: {
            type: DataTypes.DATE
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
        tableName: 'enterprise_users',
        underscored: true,
        timestamps: false,
        paranoid: false,
    });

    return User;
}

module.exports = UserModel;