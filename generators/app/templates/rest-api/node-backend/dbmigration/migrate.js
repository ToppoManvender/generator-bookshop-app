const migrateMongoConfig = require('./migrate-mongo-config');

async function runMigrateMongo() {
  try {
    const migrations = await ({
      config: migrateMongoConfig,
      cmdOptions: {
        up: true, 
      },
    });
  } catch (err) {
    console.error('Error running Migrate-mongo:', err);
  }
}

module.exports = { runMigrateMongo };
