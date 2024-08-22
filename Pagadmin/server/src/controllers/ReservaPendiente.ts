// src/controllers/reservasController.ts
import { Request, Response } from 'express';
import { Connection } from 'mysql2';

export class ReservasController {
  constructor(private db: Connection) {}

  public getReservas = (req: Request, res: Response): void => {
    
      const query = 'SELECT * FROM reservas WHERE estado = 2';
      this.db.query(query, (err, results) => {
        if (err) throw err;
        res.render('reservas', {
          reservas: results,
     
        });
      });
    } 
    };

