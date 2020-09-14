const sql = require("./db.js");

const User = function (user) {
    this.einstein_model = einstein_model;
    this.direction = user.direction;
    this.kpi = user.kpi;
    this.solution = user.solution;


};



User.getAll = (searchQuery, result) => {

    let sqlQuery = `SELECT * FROM content  WHERE direction = '${searchQuery.direction}' and kpi= '${searchQuery.kpi}' and einstein_model like '%${searchQuery.einstein_model}%'`;
    sql.query(sqlQuery, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        // console.log("content: ", res);
        result(null, res);
    });
};


module.exports = User