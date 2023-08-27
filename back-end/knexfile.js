/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://lardhyiv:4i75eu-JM7l_DdtQCloxJge98U-FD8bz@bubble.db.elephantsql.com/lardhyiv",
  DATABASE_URL_DEVELOPMENT = "postgres://lardhyiv:4i75eu-JM7l_DdtQCloxJge98U-FD8bz@bubble.db.elephantsql.com/lardhyiv",
  DATABASE_URL_TEST = "postgres://lardhyiv:4i75eu-JM7l_DdtQCloxJge98U-FD8bz@bubble.db.elephantsql.com/lardhyiv",
  DATABASE_URL_PREVIEW = "postgres://lardhyiv:4i75eu-JM7l_DdtQCloxJge98U-FD8bz@bubble.db.elephantsql.com/lardhyiv",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
