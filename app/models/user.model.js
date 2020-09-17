const pool = require("./db.js");

const User = function (user) {
    this.einstein_model = einstein_model;
    this.direction = user.direction;
    this.kpi = user.kpi;
    this.solution = user.solution;


};



User.getAll = (searchQuery, result) => {

    let conditionalQuery = `einstein_model like '%${searchQuery.einstein_model}%'`;
    if (searchQuery.direction !== "") {
        conditionalQuery += ` and direction = '${searchQuery.direction}'`
    }

    if (searchQuery.kpi !== "") {
        conditionalQuery += ` and kpi = '${searchQuery.kpi}'`
    }

    let sqlQuery = `SELECT DISTINCT solution FROM content  WHERE  ${conditionalQuery}`;


    pool.getConnection(function(err, connection) {
        // Use the connection
        connection.query(sqlQuery, (err, res) => {
            if (err) {
                console.log("----------error at sql execution --------: ", err);
                result(null, err);
                connection.release();
                return;
            }
    
            // console.log("content: ", res);
            result(null, res);
            connection.release();
        });   
       });

    /*sql.query(sqlQuery, (err, res) => {
        if (err) {
            console.log("----------error at sql execution --------: ", err);
            result(null, err);
            return;
        }

        // console.log("content: ", res);
        result(null, res);
    });*/
};


module.exports = User