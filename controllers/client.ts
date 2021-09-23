import { Request, Response } from 'express';
import Client from '../models/client';

export const getClients = async ( req: Request, res: Response ) => {
    
    try{
        const clients = await Client.findAll({
            where: {
              status: 'ACT'
            }
        });
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

export const postClient = async ( req: Request, res: Response ) => {

    const { body } = req;

    try {
        const existeEmail = await Client.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                error: 'Ya existe un Cliente con el mismo email' + body.email
            });
        }

        const client = await Client.create(body);
        res.status(201).json({
            data: client,
            code: 201
          });
    } catch (error) {
        res.status(500).json({
            error: 'No se pudo crear el Cliente'
        });
        console.log(error);
    }
}

export const putClient = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
        res.status(404).json({
            error: `No existe un Cliente con el id ${id}`
        });
        }

        await client?.update(body);
        res.status(200).json({
            data: client,
            code: 200
          });
    } catch (error) {
        res.status(500).json({
            error: 'No se actualizaron los datos'
        });
        console.log(error);
    }
}

export const deleteClient = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
        res.status(404).json({
            error: `No existe un Cliente con el id ${id}`
        });
        }

        await client?.update({
            status: 'ANU'
        });
        res.status(200).json({
            data: client,
            code: 200
          });
    } catch (error) {
        res.status(500).json({
            error: 'No se eliminarion los datos'
        });
        console.log(error);
    }
}