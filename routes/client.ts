import { getClients, getClient, postClient, putClient, deleteClient } from './../controllers/client';
import { Router } from 'express';

const router = Router();

router.get('/', getClients );
router.get('/:id', getClient );
router.post('/', postClient );
router.put('/:id', putClient );
router.delete('/:id', deleteClient );

export default router;
