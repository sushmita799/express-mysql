const User = require("../models/user.model.js");


exports.findAll = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const searchQuery = {
        einstein_model: req.body.einstein_model,
        direction: req.body.direction,
        kpi: req.body.kpi
    };

    User.getAll(searchQuery, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};


