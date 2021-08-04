import { Request, Response } from 'express';
import Client from '../models/client';

export const getClients = async ( req: Request, res: Response ) => {
    
    try{
        const clients = await Client.findAll();
        res.status(200).json({
            data: clients,
            code: 200
        });
    } catch (error) {
        res.status(500).json({
            error: 'No se pudo cargar los datos'
        });
        console.log(error);
    }
}

export const getClient = async ( req: Request, res: Response ) => {

    const { id } = req.params;

    try {
        const client = await Client.findByPk(id);
        if (client) {
          return res.status(200).json({
            data: client,
            code: 200
          });
        } 
        res.status(404).json({
          error: `No se contro el recurso con el id ${id}`
        });
    } catch (error) {
        res.status(500).json({
          error: 'No se pudo cargar los datos'
        });
        console.log(error);
    }
}

export const postClient = ( req: Request, res: Response ) => {

    const { body } = req;

    res.json({
        msj: 'postClient',
        body
    });
}

export const putClient = ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msj: 'putClient',
        body,
        id
    });
}

export const deleteClient = ( req: Request, res: Response ) => {

    const { id } = req.params;

    res.json({
        msj: 'deleteClient',
        id
    });
}