"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, resp) {
        resp.send('Reserva Exitosa!!!!');
    }
}
exports.indexController = new IndexController();
