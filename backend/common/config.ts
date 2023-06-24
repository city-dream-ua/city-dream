import dotenv from "dotenv";

dotenv.config();

export interface IConfig {
  app: {
    PORT: number;
  };
}

export const config: IConfig = {
  app: {
    PORT: Number.parseInt(process.env.PORT || "8080", 10)
  },
}
