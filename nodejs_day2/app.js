import express from "express";
const app = express();
import bodyParser from "body-parser";
const port = 3000;
import router from "./router/user-routes";

app.use(bodyParser.json());  // for parsing application/json
app.get("/", (req, res) => {
    res.json({ message: "Welcome to login application." });
    }
);
app.post("/login", router);
app.post("/register", router);
app.get("/allUsers", router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
