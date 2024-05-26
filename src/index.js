import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import bodyParser from "body-parser";
import likesRoutes from "./routes/likes.routes.js";
import interestRoutes from "./routes/interest.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/properties", propertyRoutes);
app.use("/likes", likesRoutes);
app.use("/interests", interestRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Home page");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
