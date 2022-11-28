const express = require("express");
const app = express();
const mongoose=require("mongoose");
const userRoute=require("./routes/user")

mongoose
    .connect("mongodb+srv://admin:admin123@ebookshop.x6v0dyr.mongodb.net/?retryWrites=true&w=majority"
    ).then(()=>console.log("success")).catch((err)=> {
        console.log(err);
    });

app.use(express.json());
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("IT's ALIVE");
  });