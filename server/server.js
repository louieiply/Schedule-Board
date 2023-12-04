const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    console.log("request received");
    res.json({Message:"Test request"});
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});