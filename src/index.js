import { app } from "./app.js";
import { env } from "./config/env.config.js";
import { connectDB } from "./config/db.config.js";

const PORT = env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
