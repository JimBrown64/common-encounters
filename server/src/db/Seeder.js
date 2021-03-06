/* eslint-disable no-console */
import { connection } from "../boot.js"
import CreatureSeeder from "./seeders/CreatureSeeder.js"
import EncounterSeeder from "./seeders/EncounterSeeder.js"
import EncounterCreatureSeeder from "./seeders/EncounterCreatureSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js";

class Seeder {
  static async seed() {
    console.log("seeding users");
    await UserSeeder.seed();
    console.log("seeding creatures");
    await CreatureSeeder.seed();
    console.log("seeding encounters");
    await EncounterSeeder.seed();
    await EncounterCreatureSeeder.seed();

    console.log("Done!");
    await connection.destroy()
  }
}

export default Seeder