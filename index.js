const express = require("express");


const StartServer = async() => {
    
    const app = express();

    app.listen(8000, () => {
        console.log("listening to port 8000");
    })
}

StartServer();