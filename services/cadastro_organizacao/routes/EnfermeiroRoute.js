'use strict';

module.exports = function(app) {
    var Controller = require('../controller/EnfermeiroController');

    app.route('/organizacao/enfermeiro')
        .post(Controller.Insert);

    app.route('/organizacao/enfermeiro/:id')
        .get(Controller.GetById)
        .put(Controller.Update);
}