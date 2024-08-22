"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, resp) {
        //resp.send('Games');
        database_1.default.query('DESCRIBE tbl_reservas ');
        resp.json({ text: 'Lista de Las Reservas' });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO tbl_reservas set ?', [req.body]);
            resp.json({ message: 'Reserva Creada Exitosamente' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tbl_reservas WHERE id = ?', [id]);
            resp.json({ message: 'La Reserva Fue Eliminada' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tbl_reservas set ? WHERE id=?', [req.body, id]);
            resp.json({ message: 'La Reserva Fue Actualizada' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            resp.json({ text: 'Es una Reserva' + req.params.id });
            const games = yield database_1.default.query('SELECT * FROM tbl_reservas WHERE id = ?', [id]);
            if (games.lenght > 0) {
                return resp.json(games[0]);
            }
            resp.status(404).json({ text: 'La Reserva No Existe' });
        });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
