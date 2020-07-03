import Sequelize from 'sequelize';

/* Models */
import User from '../app/models/User';
import File from '../app/models/File';

import dbConfig from '../config/database';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const connection = new Sequelize(dbConfig);

    models.forEach((md) => md.init(connection));
    models.forEach((md) => md.associate && md.associate(connection.models));
  }
}

export default new Database();
