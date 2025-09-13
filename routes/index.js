import express from 'express';
import { paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje 
} from '../controllers/paginaControllers.js';
import { 
    guardarTestimoniales
} from '../controllers/testimonialControllers.js';

const router = express.Router();

router.get('/', paginaInicio); // req - lo que enviamos : res - lo que express nos responde

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);


export default router;