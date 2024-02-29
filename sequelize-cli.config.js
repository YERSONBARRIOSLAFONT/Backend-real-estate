// sequelize-cli.config.js
const path = require('path');

module.exports = {
  config: path.resolve('config', 'config.js'), // Ruta al archivo de configuración de Sequelize
  'models-path': path.resolve('models'), // Ruta al directorio de modelos
  'seeders-path': path.resolve('seeders'), // Ruta al directorio de seeders
  'migrations-path': path.resolve('migrations'), // Ruta al directorio de migraciones
};
