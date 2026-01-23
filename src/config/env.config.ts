export const EnvConfiguration = () => ({
  environment: process.env.ENVIRONMENT,
  port: +process.env.PORT!,
  mongodb: process.env.MONGODB,
  defaultLimit: +process.env.DEFAULT_LIMIT!,
});
