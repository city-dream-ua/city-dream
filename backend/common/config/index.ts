import dotenv from "dotenv";

dotenv.config();

export interface IConfig {
  app: {
    PORT: number;
  };
  trello: {
    TRELLO_APP_KEY: string,
    TRELLO_TOKEN: string
    TRELLO_BOARD_ID: string
  },
  database: {
    DB_LINK: string
  }
}

export const config: IConfig = {
  app: {
    PORT: Number.parseInt(process.env.PORT || "8080", 10),
  },
  trello: {
    TRELLO_APP_KEY: process.env.TRELLO_APP_KEY!,
    TRELLO_TOKEN: process.env.TRELLO_TOKEN!,
    TRELLO_BOARD_ID: process.env.TRELLO_BOARD_ID!
  },
  database: {
    DB_LINK: process.env.DB_LINK!
  }
}
