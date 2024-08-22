import { Request, Response, text} from 'express';
import pool from "../database";

class GamesController{
    public list(req : Request, resp : Response){
        //resp.send('Games');
        pool.query('DESCRIBE games');
        resp.json({text: 'Listing games'});
    }

    public async create(req : Request, resp : Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO games set ?',[req.body]);
        resp.json({message : 'Game Saved'});
    }

    public async delete(req : Request, resp : Response){
        const {id} = req.params;
        await pool.query('DELETE FROM games WHERE id = ?',[id]);
        
        resp.json({message : 'Tha Game Was DELETED'});
    }

    public async update(req : Request, resp : Response){
        const {id} = req.params;
        await pool.query('UPDATE games set ? WHERE id=?', [req.body,id]);
        resp.json({message : 'The game was updsate'});
    }

    public async getOne(req : Request, resp : Response){
        const {id} = req.params;
        resp.json({text : 'This is a game' + req.params.id});
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if(games.lenght > 0){
            return resp.json(games[0]);
        }
        resp.status(404).json({text : 'The game doesn"t exist'});
    }
    
}
export const gamesController = new GamesController();
export default gamesController;