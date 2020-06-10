import { MongoClient, Db } from "mongodb";

const { DB_PATH, DB_NAME } = process.env;

let db: Db | null = null;
let client: MongoClient | null = null;

export type MongoDBServiceType = () => {
  getClient: () => MongoClient;
  getDb: (dbName?: string) => Promise<Db>;
  disconnect: () => void;
};

export const MongoDBService: MongoDBServiceType = () => {
  const getClient = () => {
    if (!client) {
      if (!DB_PATH || !DB_NAME) {
        throw Error(
          `Cannot create DB instance. Missing required config "host" and/or "database"`
        );
      }
      client = new MongoClient(DB_PATH, { useUnifiedTopology: true });
    }
    return client;
  };

  const getDb = async (dbName?: string) => {
    if (db) {
      return db;
    } else {
      const dbClient = getClient();
      const connection = await dbClient.connect();
      db = connection.db(dbName || DB_NAME);
      return db;
    }
  };

  const disconnect = () => {
    if (client != null) {
      client.close();
      client = null;
      db = null;
    }
  };

  return {
    getClient,
    getDb,
    disconnect,
  };
};

export default MongoDBService;
