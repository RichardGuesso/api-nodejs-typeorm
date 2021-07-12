module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    migrationsDir: 'dist/migrations/',
    entitiesDir: 'dist/models',
  },
};
