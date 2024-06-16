const express = require('express') 
const app = express()

app.get("/api", (req, res) => {
    res.json({
        "users": ["userOne", "userTwo", "userThree", "userFour"]
    })
})

app.listen(5000, () => console.log("El servidor se ha iniciado en el puerto 5000"))