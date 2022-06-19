import { cleanEnv, str, port } from 'envalid';

export const configurations = cleanEnv(process.env, {
  PORT: port({
    devDefault: 3000,
  }),
  MONGO_USER: str({}),
  MONGO_PASSWORD: str({}),
  MONGO_DB_NAME: str({})
});
