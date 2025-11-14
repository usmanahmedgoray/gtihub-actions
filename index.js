import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.get("/healthz", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.get("/livez", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
