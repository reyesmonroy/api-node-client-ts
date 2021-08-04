import { Request, Response } from "express";

export const getClients = ( req: Request, res: Response ) => {
    res.json({
        msj: 'getClients'
    });
}

export const getClient = ( req: Request, res: Response ) => {

    const { id } = req.params;

    res.json({
        msj: 'getClient',
        id: id
    });
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