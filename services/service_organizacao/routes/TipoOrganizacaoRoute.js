'use strict';

module.exports = function(app) {
    var Controller = require('../controller/TipoOrganizacaoController');

    app.route('/organizacao/tipoorganizacao')
        .post(Controller.Insert)
        .get(Controller.Select);

    app.route('/organizacao').get((req, res, next) => {
        res.status(200).send({
            title: "API de Cadastro de Organização do Prontuário Eletrônico",
            version: "1.0.0.0"
        })
    });
}