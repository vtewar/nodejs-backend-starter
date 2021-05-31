const { DataTypes, Model } = require('sequelize');

/**
 * 
 * @param {Sequelize} sequelize Sequelize connection object
 * @param {DataTypes} DataTypes DataTypes
 */
function CodeHeaderModel(sequelize, DataTypes) {
    
    class CodeHeader extends Model {
        static associcate(model) {
            this.hasMany(model.CodeValue)
        }
    }
    
    CodeHeader.init({
        codeListHeaderId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        codeKey: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        codeKeyDescription: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        codeKeyShortDescription: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(1),
            defaultValue: 'A',
            allowNull: false,
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
            type: DataTypes.STRING,
        },
        deleted_on_timestamp: {
            type: DataTypes.DATE
        },
    }, {
        sequelize,
        freezeTableName: true,
        tableName: 'code_list_header',
        underscored: true,
        timestamps: false,
        paranoid: false,
    });

    return CodeHeader;
}

module.exports = CodeHeaderModel;