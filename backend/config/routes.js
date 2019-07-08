const express = require('express');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);

    const userService = require('../schemas/user/userService');
    userService.register(router, '/users')

    const clientService = require('../schemas/client/clientService');
    clientService.register(router, '/clients');

    const productService = require('../schemas/product/productService');
    productService.register(router, '/products');

    const saleService = require('../schemas/sale/saleService');
    saleService.register(router, '/sales');
}