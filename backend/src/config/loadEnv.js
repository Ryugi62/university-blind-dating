import { config } from "dotenv";
import { fileURLToPath } from "url";
import { resolve } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

config({ path: resolve(__dirname, `../../${envFile}`) });

console.log(`✅ Loaded environment variables from ${envFile}`);
