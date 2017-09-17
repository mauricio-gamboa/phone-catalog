'use strict';

module.exports = function (app) {
    var phoneCatalog = require('../controllers/phoneCatalogController');

    // phoneCatalog Routes
    app.route('/phones')
        .get(phoneCatalog.listPhones)
        .post(phoneCatalog.createPhone);

    app.route('/phones/:phoneId')
        .get(phoneCatalog.getPhone)
        .put(phoneCatalog.updatePhone)
        .delete(phoneCatalog.deletePhone);
};
