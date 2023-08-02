const path = require('path');
const rootDir = require('../helper/path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'html', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

exports.getShop = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'html', 'shop.html'));
}

exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'html', 'success.html'));
}

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'html', 'contactus.html'));
}

exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
}

exports.get404 = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'html', '404.html'));
}