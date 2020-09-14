module.exports = app => {
    const user = require("../controllers/user.controller.js");

    // Retrieve all users
    app.post("/users", user.findAll);


};
