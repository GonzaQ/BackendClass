const prouctModel = require('../model/Product')

module.exports = class ProductController {
    constructor() { }

    static getProduct(req, res, next) {
        prouctModel.getProduct(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        });
    }

    static getProductById(req, res, next) {
        let id = req.params.id;

        prouctModel.getProductById(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        }, id);
    }

    static Create(req, res, next) {
        let newProduct = req.body;

        prouctModel.Create(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        }, newProduct);
    }
}