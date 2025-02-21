import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use((req, res) => {
    res.status(404).send("Route not found");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
