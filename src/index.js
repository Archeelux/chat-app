const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, "../public");

app.use("/", express.static(publicDirPath));

// app.get("/", (req, res) => {
//     res.sendFile(publicDirPath);
// });

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
