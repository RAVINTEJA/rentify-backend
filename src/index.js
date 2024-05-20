import express from "express";
// import authRoutes from "./routes/auth.routes";
// import propertyRoutes from "./routes/property.routes";
// import likeRoutes from "./routes/like.routes";
// import interestRoutes from "./routes/interest.routes";
import dotenv from "dotenv";
// import authRoutes from "./routes/auth.routes";
import authRoutes from "./routes/auth.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.json());

app.use("/auth",authRoutes);
app.use("/property",propertyRoutes);
// app.use("/likes",likeRoutes);
// app.use("/interest",interestRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Home page");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
