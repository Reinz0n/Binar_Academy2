const {Components} = require('../db/models');

module.exports = {
    index: async (req, res, next) => {
        try{
            const components = await Components.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: components
            })
        } catch(err){
            next(err);
        }
    },

    show: async (req, res, next) => {
        try{
            const {component_id} = req.params;

            const component = await Components.findOne({
                where:{
                    id: component_id
                }
            });

            if(!component){
                return res.status(404).json({
                    status: false,
                    message: `can't find component with id ${component_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: component
            })
        } catch(err){
            next(err);
        }
    },

    store: async (req, res, next) => {
        try{
            const {name, description} = req.body;

            const channel = await Components.create({
                name: name,
                description: description
            })

            return res.status(201).json({
                status: true,
                message: 'success',
                data: channel
            })
        } catch(err){
            next(err);
        }
    },

    update: async (req, res, next) => {
        try{
            const {component_id} = req.params;

            const updated = await Components.update(req.body, {
                where: {
                    id: component_id
                }
            });
            
            if(updated[0] == 0){
                return res.status(404).json({
                    status: false,
                    message: `can't find component with id ${component_id}!`,
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
            const {component_id} = req.params;

            const deleted = await Components.destroy({
                where:{
                    id: component_id
                }
            });

            if(!deleted){
                return res.status(404).json({
                    status: false,
                    message: `can't find component with id ${component_id}!`,
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