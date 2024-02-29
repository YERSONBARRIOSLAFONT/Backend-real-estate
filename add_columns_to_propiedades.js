// En el archivo de migración (migrations/XXXXXXXXXXXXXX-add_columns_to_propiedades.js)

"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("propiedades", "categoriaId", {
            type: Sequelize.INTEGER,
            allowNull: false,
        });
        await queryInterface.addColumn("propiedades", "usuarioId", {
            type: Sequelize.INTEGER,
            allowNull: false,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("propiedades", "categoriaId");
        await queryInterface.removeColumn("propiedades", "usuarioId");
    },
};
