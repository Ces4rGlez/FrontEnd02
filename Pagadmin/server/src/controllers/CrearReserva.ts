import { Request, Response } from "express";

class IndexController{
    public index(req : Request, resp : Response ){
        resp.send('Reserva Exitosa!!!!');
    }
}

export const indexController = new IndexController();