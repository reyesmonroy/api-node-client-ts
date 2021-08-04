import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Client = db.define('client', {
  firt_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  tel: {
    type: DataTypes.NUMBER
  },
  genre: {
    type: DataTypes.STRING
  },
  birth_date: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.STRING
  }
});

export default Client;