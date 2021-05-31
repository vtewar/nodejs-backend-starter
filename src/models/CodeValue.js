const { DataTypes, Model } = require('sequelize');

/**
 * 
 * @param {Sequelize} sequelize Sequelize connection object
 * @param {DataTypes} DataTypes DataTypes
 */
function CodeValueModel(sequelize, DataTypes) {
    
    class CodeValue extends Model {
        static associcate(model) {
            this.belongsTo(model.CodeHeader, {
                foreignKey: {
                    name: 'code_list_header_id',
                    allowNull: false,
                },
                targetKey: 'code_list_header_id',
            })
        }
    }
    
    CodeValue.init({
        codeListValueId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        codeValue: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        codeValueDescription: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        codeValueShortDescription: {
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

    return CodeValue;
}

module.exports = CodeValueModel;