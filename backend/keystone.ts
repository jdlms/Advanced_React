import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config";
import { User } from "./schemas/User";

const databaseURL = process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, //how long should users stay logged in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      //@ts-ignore//

      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    //Add data seeding here
  },
  lists: createSchema({
    User,
  }),
  ui: {
    //todo change for roles,
    isAccessAllowed: () => true,
  },
  //add session values here
});
