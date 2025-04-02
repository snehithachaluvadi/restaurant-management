import app from "./app.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000; // Default to 5000 if undefined

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
