var mysql = require('mysql');

module.exports = class Product {
    constructor() { }

    static getProduct(cb) {
        var con = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "root",
            password: "Primavera2020",
            database: 'Test'
        });

        con.connect(
            function (err) {
                if (err){
                    cb(null,err);
                }else{
                    //cb('conectado',null);
                    con.query(`SELECT 
                    Test.Product.idProduct,
                    Test.Product.Name,
                    Test.Product.Price,
                    Test.Product.Create_date,
                    Test.Category.idCategory,
                    Test.Category.Name AS 'Category Name'
                
                 FROM Test.Product inner join Test.Category on Test.Product.Category_idCategory = Test.Category.idCategory`, function (error, results, fields) {
                        
                        if (error) cb(null,error);
                        cb(results);
                        // connected!
                      });
                }
               
            }
        );
    }

    static getProductById(cb,id) {
        var con = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "root",
            password: "Primavera2020",
            database: 'Test'
        });

        con.connect(
            function (err) {
                if (err){
                    cb(null,err);
                }else{
                    //cb('conectado',null);
                    con.query(`SELECT 
                    Test.Product.idProduct,
                    Test.Product.Name,
                    Test.Product.Price,
                    Test.Product.Create_date,
                    Test.Category.idCategory,
                    Test.Category.Name AS 'Category Name'
                
                 FROM Test.Product inner join Test.Category on Test.Product.Category_idCategory = Test.Category.idCategory  
                 WHERE Test.Product.idProduct = ${id}`, function (error, results, fields) {
                        if (error) cb(null,error);
                        cb(results);
                        // connected!
                      });
                }
               
            }
        );
    }

    static Create(cb,product) {
        var con = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "root",
            password: "Primavera2020",
            database: 'Test'
        });

        con.connect(
            function (err) {
                if (err){
                    cb(null,err);
                }else{
                    //cb('conectado',null);
                    con.query(`call Test.Create_Product(?, ?, ?);`,[product.Name,product.Price,0], function (error, results, fields) {
                        if (error) cb(null,error);
                        cb(results);
                        // connected!
                      });
                }
               
            }
        );
    }
}

