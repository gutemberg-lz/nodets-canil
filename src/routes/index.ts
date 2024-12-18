import express from 'express';

import * as PageController from '@/controllers/pageController';
import * as SearchCOntroller from '@/controllers/searchController';

const router = express();

router.get("/", PageController.Home);
router.get("/dogs", PageController.Dogs);
router.get("/cats", PageController.Cats);
router.get("/fishes", PageController.Fishes);

router.get("/search", SearchCOntroller.Search);

export default router;
