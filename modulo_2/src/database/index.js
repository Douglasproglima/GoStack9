import Sequelize from 'sequelize';
import mongoose from 'mongoose';

/* Models */
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import dbConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    const connection = new Sequelize(dbConfig);

    models.forEach((md) => md.init(connection));
    models.forEach((md) => md.associate && md.associate(connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('MongoDB Conectado!'))
      .catch((err) => {
        console.log(`Erro ao Conectar MongoDB: ${err.message}`);
      });
  }
}

export default new Database();
