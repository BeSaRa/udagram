export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_region: process.env.AWS_REGION,
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_profile: process.env.AWS_PROFILE,
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
