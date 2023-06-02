const express = require('express');
const router = express.Router();
const component = require('../controllers/component');
const product = require('../controllers/product');
const supplier = require('../controllers/supplier');
const user = require('../controllers/user');
const media = require('../controllers/media');
const rbac = require('../controllers/rbac');
const enums = require('../utils/enum');
const multer = require('multer')();
const nodemailer = require('../utils/nodemailer');

const middlewares = require('../utils/middlewares');

router.get('/', (req, res) => res.status(200).json({
    message: "welcome to challenge 7!"
}));

router.post('/auth/register', user.register);
router.post('/auth/login', user.login);
router.get('/auth/oauth', user.googleOauth2);
router.get('/auth/whoami', middlewares.auth, user.whoami);
router.get('/reset-password', user.resetPasswordPage);
router.post('/auth/forgot-password', user.forgotPassword);
router.post('/auth/reset-password', user.resetPassword);

router.get('/test/mailer', async (req, res) => {
    try {
        // send email
        const html = await nodemailer.getHtml('welcome.ejs', {user: {name: 'Mikhael'}});
        nodemailer.sendMail('mikhaelrivandio@gmail.com', 'Halo', html);

        return res.status(200).json({
            status: true,
            message: 'success',
            data: null
        });
    } catch (error) {
        throw error;
    }
});

// module
router.post('/rbac/modules', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.modules.store);
router.get('/rbac/modules', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), rbac.modules.index);
router.get('/rbac/modules/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), rbac.modules.show);
router.put('/rbac/modules/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.modules.update);
router.delete('/rbac/modules/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.modules.destroy);

// role
router.post('/rbac/roles', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.roles.store);
router.get('/rbac/roles', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), rbac.roles.index);
router.get('/rbac/roles/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), rbac.roles.show);
router.put('/rbac/roles/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.roles.update);
router.delete('/rbac/roles/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.roles.destroy);

// role access
router.post('/rbac/roleaccess', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.roleaccess.store);
router.get('/rbac/roleaccess', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), rbac.roleaccess.index);
router.get('/rbac/roleaccess/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), rbac.roleaccess.show);
router.put('/rbac/roleaccess/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.roleaccess.update);
router.delete('/rbac/roleaccess/:id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), rbac.roleaccess.destroy);

// components
router.get('/components', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), component.index); // get all components
router.get('/components/:component_id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), component.show); // get detailed component
router.post('/components', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, true), component.store); // create new component
router.put('/components/:component_id', middlewares.rbac(enums.rbacModule.authorization, true, true), component.update); // update component
router.delete('/components/:component_id', middlewares.rbac(enums.rbacModule.authorization, true, true), component.destroy); // delete component

// products
router.get('/products', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), product.index); // get all products
router.get('/products/:product_id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), product.show); // get detailed product
router.post('/products', middlewares.rbac(enums.rbacModule.authorization, true, true), product.store); // create new product
router.put('/products/:product_id', middlewares.rbac(enums.rbacModule.authorization, true, true), product.update); // update product
router.delete('/products/:product_id', middlewares.rbac(enums.rbacModule.authorization, true, true), product.destroy); // delete product

// suppliers
router.get('/suppliers', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), supplier.index); // get all suppliers
router.get('/suppliers/:supplier_id', middlewares.auth, middlewares.rbac(enums.rbacModule.authorization, true, false), supplier.show); // get detailed supplier
router.post('/suppliers', middlewares.rbac(enums.rbacModule.authorization, true, true), supplier.store); // create new supplier
router.put('/suppliers/:supplier_id', middlewares.rbac(enums.rbacModule.authorization, true, true), supplier.update); // update supplier
router.delete('/suppliers/:supplier_id', middlewares.rbac(enums.rbacModule.authorization, true, true), supplier.destroy); // delete supplier

router.post('/imagekit/upload', multer.single('media'), media.imagekitUpload);

module.exports = router;