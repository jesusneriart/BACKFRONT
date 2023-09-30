const express = require('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({"users": ["userOne, userTwo, userThree, userFour"]})
}
)

app.listen(7777, ()=>{console.log("Server started on port 7777 ")})