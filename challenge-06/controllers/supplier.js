const {Suppliers} = require('../db/models');

module.exports = {
    index: async (req, res, next) => {
        try{
            const suppliers = await Suppliers.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: suppliers
            })
        } catch(err){
            next(err);
        }
    },

    show: async (req, res, next) => {
        try{
            const {supplier_id} = req.params;

            const supplier = await Suppliers.findOne({
                where:{
                    id: supplier_id
                }
            });

            if(!supplier){
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${supplier_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: supplier
            })
        } catch(err){
            next(err);
        }
    },

    store: async (req, res, next) => {
        try{
            const {name, address} = req.body;

            const supplier = await Suppliers.create({
                name: name,
                address: address
            })

            return res.status(201).json({
                status: true,
                message: 'success',
                data: supplier
            })
        } catch(err){
            next(err);
        }
    },

    update: async (req, res, next) => {
        try{
            const {supplier_id} = req.params;

            const updated = await Suppliers.update(req.body, {
                where: {
                    id: supplier_id
                }
            });
            
            if(updated[0] == 0){
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${supplier_id}!`,
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
            const {supplier_id} = req.params;

            const deleted = await Suppliers.destroy({
                where:{
                    id: supplier_id
                }
            });

            if(!deleted){
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${supplier_id}!`,
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