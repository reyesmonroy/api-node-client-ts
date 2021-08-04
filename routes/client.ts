import { Router } from 'express';
import { getClients, getClient, postClient, putClient, deleteClient } from './../controllers/client';

const router = Router();

router.get('/', getClients );
router.get('/:id', getClient );
router.post('/', postClient );
router.put('/:id', putClient );
router.delete('/:id', deleteClient );

export default router;
