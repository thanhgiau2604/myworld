const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname+"/public"));

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
})
app.listen(PORT,() => {
    console.log("App listening on PORT ", PORT)
})