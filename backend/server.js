const express = require("express");
const cors = require("cors");
const mongooes = require("mongoose");
const session = require("express-session");

const app = express();
// Port exist or not not then open in 5000
const port = process.env.PORT || 5000;
const DBCONNECTION =
  "mongodb+srv://college_erp:college_erp@cluster0.kc18p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  session({
    secret: "keyborad cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  res.send("I am working great!! :)");
});

const adminRouter = require("./controllers/admin.routes");
app.use("/admin", adminRouter);

const userStaticDetails = require("./controllers/users.routes");
app.use("/admin-power", userStaticDetails);

const teachersUpdate = require("./controllers/teacher.routes");
app.use("/teacher", teachersUpdate);

const studentUpdate = require("./controllers/student.routes");
app.use("/student", studentUpdate);

const addBook = require("./controllers/library.routes");
app.use("/book", addBook);

const updateStudentAccounts = require("./controllers/student.account.routes");
app.use("/accounts", updateStudentAccounts);

// Check Connection
mongooes
  .connect(DBCONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`server is on port ${port}`);
    });
  })
  .catch((error) => console.log(error.message));
