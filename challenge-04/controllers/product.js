const {Products} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try{
            const products = await Products.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: products
            })
        } catch(err){
            next(err);
        }
    },

    show: async (req, res, next) => {
        try{
            const {product_id} = req.params;

            const product = await Products.findOne({
                where:{
                    id: product_id
                }
            });

            if(!product){
                return res.status(404).json({
                    status: false,
                    message: `can't find product with id ${product_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: product
            })
        } catch(err){
            next(err);
        }
    },

    store: async (req, res, next) => {
        try{
            const {name, quantity} = req.body;

            const product = await Products.create({
                name: name,
                quantity: quantity
            })

            return res.status(201).json({
                status: true,
                message: 'success',
                data: product
            })
        } catch(err){
            next(err);
        }
    },

    update: async (req, res, next) => {
        try{
            const {product_id} = req.params;

            const updated = await Products.update(req.body, {
                where: {
                    id: product_id
                }
            });
            
            if(updated[0] == 0){
                return res.status(404).json({
                    status: false,
                    message: `can't find product with id ${product_id}!`,
                    data: null
                });
            }

            return res.status(201).json({
                status: true,
                message: 'success',
                data: null
            })
        } catch(err){
            next(err);
        }
    },

    destroy: async (req, res, next) => {
        try{
            const {product_id} = req.params;

            const deleted = await Products.destroy({
                where:{
                    id: product_id
                }
            });

            if(!deleted){
                return res.status(404).json({
                    status: false,
                    message: `can't find product with id ${product_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: deleted
            })
        } catch(err){
            next(err);
        }
    }
};