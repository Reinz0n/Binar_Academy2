const {Module} = require('../../db/models');

module.exports = {
    store: async (req, res) => {
        try {
            const {name, description} = req.body;
            if (!name) {
                return res.status(400).json({
                    status: false,
                    message: 'module name is required!',
                    data: null
                });
            }

            const module = await Module.findOne({where: {name}});
            if (module) {
                return res.status(400).json({
                    status: false,
                    message: `module ${name} is already exist!`,
                    data: module
                });
            }

            const newModule = await Module.create({name, description});
            return res.status(201).json({
                status: true,
                message: `module ${name} created!`,
                data: newModule
            });

        } catch (error) {
            throw error;
        }
    },

    index: async (req, res) => {
        try {
            const modules = await Module.findAll();
            return res.status(200).json({
                status: false,
                message: `success`,
                data: modules
            });
        } catch (error) {
            throw error;
        }
    },

    show: async (req, res) => {
        try {
            const {id} = req.params;
            const module = await Module.findOne({where: {id}});
            if (!module) {
                return res.status(404).json({
                    status: false,
                    message: `module with id ${id} is not exist!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: false,
                message: `success`,
                data: module
            });
        } catch (error) {
            throw error;
        }
    },

    update: async (req, res, next) => {
        try{
            const {id} = req.params;

            const updated = await Module.update(req.body, {where: {id: id}});
            
            if(updated[0] == 0){
                return res.status(404).json({
                    status: false,
                    message: `can't find module with id ${id}!`,
                    data: null
                });
            }

            return res.status(201).json({
                status: true,
                message: 'success',
                data: updated
            })
        } catch(err){
            next(err);
        }
    },

    destroy: async (req, res, next) => {
        try{
            const {id} = req.params;

            const deleted = await Module.destroy({where: {id: id}});

            if(!deleted){
                return res.status(404).json({
                    status: false,
                    message: `can't find module with id ${id}!`,
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