import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// imprort routes
import userRoute from "./routes/user.route.js";

app.use("/api/users", userRoute);

export { app };
