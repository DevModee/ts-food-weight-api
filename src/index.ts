import express from "express";
import userRoutes from "./routes/user.routes";
import foodRoutes from "./routes/food.routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/food", foodRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
